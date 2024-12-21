"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { SiteContext } from "@/context/context";
import Revealer from "@/layouts/Revealer";
import SiteLayout from "@/layouts/SiteLayout";
import { useContext, useEffect } from "react";

const Page = () => {
  const { darkToggle, changeColor } = useContext(SiteContext);
  useEffect(() => {
    darkToggle();
    changeColor("green");
  }, []);

  return (
    <SiteLayout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home
          authorImage={"assets/img/ppenicka_desktop.jpg"}
          authorImageMobile={"assets/img/ppenicka_mobile.jpg"}
        />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
        {/* Portfolio Starts */}
        <Portfolio />
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
        {/* Blog Starts */}
        {/* <Blog /> */}
        {/* Blog Ends */}
      </div>
      <Revealer />
    </SiteLayout>
  );
};
export default Page;
