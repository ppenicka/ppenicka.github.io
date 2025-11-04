"use client";
import { useState, useEffect } from "react";
import SiteLayout from "@/layouts/SiteLayout";
import Revealer from "@/layouts/Revealer";

const AddRibbonToWallpaper = () => {
  const SCREENS = [
    {
      name: "MacBook Pro 16",
      suffix: "mac-16",
      size: [3840, 2160],
      ribbonHeight: 38,
      borderRadius: 15,
    },
    {
      name: "MacBook Pro 14",
      suffix: "mac-14",
      size: [3024, 1964],
      ribbonHeight: 75,
      borderRadius: 26,
    },
    {
      name: "MacBook Pro 13",
      suffix: "mac-13",
      size: [2560, 1600],
      ribbonHeight: 75,
      borderRadius: 26,
    },
    {
      name: "4k External Display",
      suffix: "4k",
      size: [3840, 2160],
      ribbonHeight: 38,
      borderRadius: 15,
    },
  ];

  const [selectedScreen, setSelectedScreen] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [originalFileName, setOriginalFileName] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFormat, setImageFormat] = useState("png");

  // Cleanup object URLs on unmount or when preview changes
  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const processImage = (img, screenIndex) => {
    // Revoke previous blob URL if it exists
    if (previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
    const quality = 0.9;
    const screen = SCREENS[screenIndex];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = screen.size[0];
    canvas.height = screen.size[1];

    // Draw the image first, stretched to fit canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Create a temporary canvas for the ribbon overlay
    const ribbonCanvas = document.createElement("canvas");
    ribbonCanvas.width = canvas.width;
    ribbonCanvas.height = canvas.height;
    const ribbonCtx = ribbonCanvas.getContext("2d");

    // Draw first black ribbon on overlay
    ribbonCtx.fillStyle = "black";
    ribbonCtx.fillRect(0, 0, ribbonCanvas.width, screen.ribbonHeight);

    // Draw second black ribbon below the first
    ribbonCtx.fillRect(
      0,
      screen.ribbonHeight,
      ribbonCanvas.width,
      screen.borderRadius
    );

    // Cut out the middle area with rounded top from the second ribbon
    ribbonCtx.globalCompositeOperation = "destination-out";
    ribbonCtx.beginPath();
    ribbonCtx.moveTo(screen.borderRadius, screen.ribbonHeight);
    ribbonCtx.arcTo(
      0,
      screen.ribbonHeight,
      0,
      screen.ribbonHeight + screen.borderRadius,
      screen.borderRadius
    );
    ribbonCtx.lineTo(0, screen.ribbonHeight + screen.borderRadius);
    ribbonCtx.lineTo(canvas.width, screen.ribbonHeight + screen.borderRadius);
    ribbonCtx.arcTo(
      canvas.width,
      screen.ribbonHeight,
      canvas.width - screen.borderRadius,
      screen.ribbonHeight,
      screen.borderRadius
    );
    ribbonCtx.closePath();
    ribbonCtx.fill();

    // Draw the ribbon overlay on top of the image
    ctx.drawImage(ribbonCanvas, 0, 0);

    const fallbackToPng = () => {
      setPreviewUrl(canvas.toDataURL("image/png"));
      setImageFormat("png");
    };

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setPreviewUrl(url);
          setImageFormat("webp");
        } else {
          fallbackToPng();
        }
      },
      "image/webp",
      quality
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setOriginalFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        processImage(img, selectedScreen);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleScreenChange = (e) => {
    const newScreenIndex = parseInt(e.target.value);
    setSelectedScreen(newScreenIndex);
    if (uploadedImage) {
      processImage(uploadedImage, newScreenIndex);
    }
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    const link = document.createElement("a");
    const screen = SCREENS[selectedScreen];
    const baseName = originalFileName.split(".")[0];

    link.download = `${baseName}-${screen.suffix}-with-ribbon.${imageFormat}`;
    link.href = previewUrl;
    link.click();
  };

  return (
    <SiteLayout>
      <div className="w-full h-full pages overflow-auto">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <h1 className="text-3xl font-bold mb-6">Add Black Ribbon to Image</h1>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Select Screen:</label>
            <select
              value={selectedScreen}
              onChange={handleScreenChange}
              className="px-4 pb-4 border rounded bg-black"
            >
              {SCREENS.map((screen, index) => (
                <option key={index} value={index}>
                  {screen.name} ({screen.size[0]}x{screen.size[1]})
                </option>
              ))}
            </select>
          </div>

          <div className="my-24">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="px-4 py-2 border"
            />
          </div>

          {previewUrl && (
            <div>
              <div className="my-6 mt-8 p-18 bg-white rounded-4">
                <img src={previewUrl} alt="Preview" />
              </div>
              <button
                onClick={handleDownload}
                className="mt-4 px-6 py-2 text-white"
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
      <Revealer />
    </SiteLayout>
  );
};

export default AddRibbonToWallpaper;
