"use client";
import { SiteContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "First Name", value: "Petr" },
      { id: 2, type: "Last Name", value: "Penicka" },
      { id: 3, type: "Nationality", value: "Czech" },
      { id: 4, type: "Langages", value: "English, German, Spanish, Czech" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 5, type: "Email", value: "petr.penicka@gmail.com" },
      { id: 6, type: "LinkedIn", value: "linkedin.com/in/petr-penicka" },
      { id: 7, type: "GitHub", value: "github.com/ppenicka" },
      { id: 8, type: "Availability", value: "open to new clients" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: "years of experience in frontend engineering",
    value: "5",
  },
  {
    id: 2,
    title: "years of experience in the tech industry",
    value: "15",
  },
];

const experiences = [
  {
    id: 1,
    date: "2024 - Present",
    title: "Senior Frontend Engineer",
    company: "Slash.digital",
    desc: "As a Senior Frontend Engineer at Slash.Digital, I'm developing high-exposure marketing websites and web applications that support clients' marketing campaigns and have significant impact on the growth of their business.",
  },
  {
    id: 2,
    date: "2021 - 2024",
    title: "Frontend Engineer",
    company: "Glovo",
    desc: "Worked on projects including UI for the company's billing and invoicing system, UI for configuration of payment gateways and payment methods, CAPTCHAs, phone verification, 2-factor authentication, UI for configuring partner payout settings, modularization and migration of web apps to monorepo architecture. I had also led the migration of courier registration website from WordPress to a custom solution based on Nuxt.js and Prismic.",
  },
  {
    id: 3,
    date: "2020 - 2021",
    title: "Frontend Developer",
    company: "ManoMano",
    desc: "Implemented redesign of the main product page (with traffic over 1M views per day), redesign of the main navigation menu, customisation of the UI for professional users, and migration of the codebase to TypeScript.",
  },
  {
    id: 4,
    date: "2016 - 2019",
    title: "Program Manager",
    company: "Red Hat",
    desc: "Managed the planning, development and delivery of 20+ releases of various Red Hat products.",
  },
  {
    id: 5,
    date: "2014 - 2015",
    title: "Documentation Program Manager",
    company: "Red Hat",
    desc: "Managed a team of technical writers responsible for technical documentation of Red Hat products.",
  },
  {
    id: 6,
    date: "2012 - 2014",
    title: "Technical Writer",
    company: "Red Hat",
    desc: "Authored and maintained technical documentation of Red Hat products.",
  },
  {
    id: 7,
    date: "2008 - 2012",
    title: "Technical Writer",
    company: "Kentico Software",
    desc: "Authored and maintained technical product documentation of Kentico CMS.",
  },
];

const educations = [
  {
    id: 1,
    date: "2020",
    title: "Bootcamp",
    unv: "Codeworks",
    desc: "Intensive software engineering bootcamp focused on full-stack JavaScript web development.",
  },
  {
    id: 2,
    date: "2013",
    title: "Master's Degree",
    unv: "Masaryk University",
    desc: "Master's degree in Applied Informatics.",
  },
  {
    id: 3,
    date: "2009",
    title: "Bachelor's Degree",
    unv: "Masaryk University",
    desc: "Bachelor's degree in Applied Informatics.",
  },
];

const skills = [
  { id: 1, name: "HTML", icon: "html" },
  { id: 2, name: "CSS", icon: "css" },
  { id: 3, name: "JavaScript", icon: "js" },
  { id: 4, name: "TypeScript", icon: "ts" },
  { id: 5, name: "React", icon: "react" },
  { id: 6, name: "Next.js", icon: "next" },
  { id: 7, name: "Vue.js", icon: "vue" },
  { id: 8, name: "Nuxt.js", icon: "nuxt" },
  { id: 9, name: "Node.js", icon: "node" },
  { id: 10, name: "WordPress", icon: "wp" },
  { id: 11, name: "Tailwind", icon: "tailwind" },
  { id: 12, name: "SaSS", icon: "sass" },
];

const About = () => {
  const { dark } = useContext(SiteContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"resume"}
          colorTitle={"me"}
          normalTitle={"about"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto xs:mt-18">
          <div className="flex flex-row down-lg:flex-col">
            {/* Personal Informations Starts */}
            <div className="basis-2/3">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22  text-white font-semibold">
                personal info
              </h3>

              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <a
                className="button group mt-35  overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                href="https://ppenicka.me/cv/cv-penicka.pdf"
                target="_blank"
              >
                <span
                  className={`relative z-20 text-${
                    dark
                      ? "white"
                      : "black-6 group-hover:text-white transition-all duration-300"
                  }`}
                >
                  download cv
                </span>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent" />
              </a>
            </div>
            {/* Personal Informations Ends */}
            {/* Facts Starts */}
            <div className="basis-1/3 down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {counters.map((counter) => (
                  <div className="w-full px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${
                        dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facts Ends */}
          </div>
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            Technologies I work with
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${
                    skill.value
                  } float-none mx-auto flex flex-col ${
                    dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                  }`}
                >
                  <img
                    className="relative z-10 mx-auto my-auto"
                    width="56"
                    src={"assets/img/tech/" + skill.icon + ".svg"}
                    alt={skill.name}
                  />
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            experience &amp; education
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {experience.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
