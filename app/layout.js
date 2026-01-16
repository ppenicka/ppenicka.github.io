import "@css/circle.css";
import "@css/component.css";
// import "@css/font-awesome.css";
import "@css/font-awesome.min.css";
import "@css/style.css";
import "./globals.css";
// <!-- Live Style Switcher - demo only --;
import SiteState from "@/context/context";
import SiteCss from "@/layouts/SiteCss";
import "@css/styleswitcher.css";
import { Open_Sans, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata = {
  title: "Petr Penicka - Software Engineer",
  description:
    "Professional portfolio of Petr Penicka, a freelance software engineer specialized in JavaScript technologies.",
};

const fontFamily = `${open_sans.variable} ${poppins.variable}`;

export default function RootLayout({ children }) {
  return (
    <SiteState>
      <html
        lang="en"
        className="overflow-x-hidden h-full js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
      >
        <head>
          <SiteCss />
        </head>
        <body
          className={`${fontFamily} font-Poppins text-fs-16 font-medium leading-lh-1.6`}
        >
          {children}
        </body>
        <GoogleAnalytics gaId="G-43GXZ5Y6F3" />
      </html>
    </SiteState>
  );
}
