"use client";
import { SiteContext } from "@/context/context";
import { Fragment, useContext } from "react";
const SiteCss = () => {
  const { color } = useContext(SiteContext);
  return (
    <Fragment>
      <link rel="stylesheet" href={`/assets/css/skins/${color}.css`} />
    </Fragment>
  );
};
export default SiteCss;
