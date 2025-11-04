"use client";
import { SiteContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 8,
    title: "Stadia Maps Dashboard",
    type: "img",
    src: "",
    img: "assets/img/projects/stadia-dashboard.png",
    project:
      "The original dashboard consisted of three separate applications, one being Vue 3, another Vue 2, and the third one Django. I have refactored it to a single application using Nuxt 3 and an up-to-date stack.",
    client: "Stadia Maps",
    langages: "Vue.js, Django, Bootstrap, TypeScript",
    previewLink: "https://stadiamaps.com",
  },
  {
    id: 7,
    title: "stadiamaps.com",
    type: "img",
    src: "",
    img: "assets/img/projects/stadiamaps-com.png",
    project:
      "My work on stadiamap.com has included implementing full-site search using Fuse.js, implementing complex pricing calculators, converting multiple hard-coded pages to Nuxt Content, and more.",
    client: "Stadia Maps",
    langages: "Nuxt.js, TypeScript, Bulma, Fuse.js",
    previewLink: "https://stadiamaps.com",
  },
  {
    id: 6,
    title: "gAppointments Time Zones",
    type: "img",
    src: "",
    img: "assets/img/projects/gappointments-timezones.png",
    project:
      "WordPress plugin to customize functionality of existing gAppointments plugin, adapting it to the needs of the client. Instead of displaying appointment times in a fixed time-zone, it displays them in the user's local time-zone, and sends the time zone choice to the backend together with the rest of appointment data.",
    client: "Herrmann, Huebner & Partner Insurance Broker OÜ",
    langages: "WordPress, JavaScript, jQuery, moment.js",
    previewLink: "https://nomads.insure",
  },
  {
    id: 5,
    title: "Pura Design",
    type: "img",
    src: "",
    img: "assets/img/projects/pura.png",
    project:
      "I am in early stages of collaboration with this agency, but you can check out their website to get an idea about the projects I will work on",
    client: "Pura Design",
    langages: "React, Next.js, JavaScript, TypeScript, Tailwind, jQuery",
    previewLink: "https://puradesign.cz",
  },
  {
    id: 4,
    title: "Slash.digital",
    type: "img",
    src: "",
    img: "assets/img/projects/slash.png",
    project:
      "I am under NDA to share details about specific projects, but you can check out the agency website to get an idea about the projects I work on",
    client: "Slash.digital",
    langages:
      "Vue.js, Nuxt.js, JavaScript, TypeScript, Tailwind CSS, SCSS, SWRV, Wagtail CMS",
    previewLink: "https://slash.digital",
  },
  {
    id: 3,
    title: "Glovo Couriers Registration",
    type: "img",
    src: "",
    img: "assets/img/projects/glovo-couriers.png",
    project: "implementation of new couriers registration website",
    client: "Glovo - in-house employee",
    langages:
      "Vue.js, Nuxt.js, JavaScript, TypeScript, Vuex, Pinia, Tailwind CSS, Sass, Element UI, Prismic CMS",
    previewLink: "https://couriers.glovoapp.com/es/",
  },
  {
    id: 2,
    title: "Glovo Customer Web",
    type: "img",
    src: "",
    img: "assets/img/projects/glovo.png",
    project:
      "numerous contributions to the customer web and its back office platform",
    client: "Glovo - in-house employee",
    langages:
      "Vue.js, Nuxt.js, JavaScript, TypeScript, Vuex, Pinia, Tailwind CSS, Sass, Element UI, Prismic CMS",
    previewLink: "https://www.glovoapp.com",
  },
  {
    id: 1,
    title: "ManoMano Product Page",
    type: "img",
    src: "",
    img: "assets/img/projects/manomano-pp.png",
    project: "implementation of new product page",
    client: "ManoMano - in-house employee",
    langages:
      "React.js, Next.js, JavaScript, TypeScript, Redux.js, Redux-Saga, Sass, Enzyme",
    previewLink: "https://www.manomano.fr",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(SiteContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
