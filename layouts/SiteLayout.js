"use client";
import DayLight from "@/components/DayLight";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import Switcher from "@/components/Switcher";
import { SiteContext } from "@/context/context";
import { tunisUtility } from "@/utility";
import { useContext, useEffect } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const SiteLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(SiteContext);
  useEffect(() => {
    tunisUtility.customCursor();
  }, []);
  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${
        dark ? "black" : "white"
      } text-${
        dark ? "white" : "black-6"
      } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}
      <Switcher />
      <DayLight />
      {/* Live Style Switcher Ends - demo only */}

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
      <Cursor />
    </div>
  );
};
export default SiteLayout;
