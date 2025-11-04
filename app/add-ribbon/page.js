"use client";
import SiteLayout from "@/layouts/SiteLayout";
import Revealer from "@/layouts/Revealer";

const AddRibbonToWallpaper = () => {
  return (
    <div className="w-full h-full pages overflow-auto">
      <iframe
        src="/add-ribbon/index.html"
        className="w-full h-screen border-0"
        title="Add Ribbon to Wallpaper"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
};

export default AddRibbonToWallpaper;
