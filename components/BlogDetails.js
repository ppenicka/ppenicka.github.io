"use client";
import { SiteContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const BlogDetails = ({ blog }) => {
  const { dark } = useContext(SiteContext);
  const ContentComponent = blog.contentComponent;

  return (
    <SectionContainer id={"blog-details"}>
      <div className="w-full">
        <SectionTitle
          bigTitle={"posts"}
          colorTitle={"blog"}
          normalTitle={"my"}
        />
        <div className="mx-auto max-w-700 down-sm:px-25 xs:pt-85">
          <div
            className={`text-fs-13 text-${
              dark ? "light-grey" : "black-3"
            } font-Open-sans`}
          >
            <span className="pr-15">
              <i className="fa fa-user pr-3 text-accent" /> {blog.author}
            </span>
            <span className="pr-15">
              <i className="fa fa-calendar pr-3 text-accent" /> {blog.date}
            </span>
            <span className="pr-15">
              <i className="fa fa-tags pr-3 text-accent" /> {blog.tags}
            </span>
          </div>
          <h1 className="mt-13 mb-28 font-semibold capitalize text-fs-40 xs:text-fs-26 leading-lh-1.2">
            {blog.title}
          </h1>
          <img className="rounded-5 mb-32 w-full" src={blog.img} alt="img" />
          <ContentComponent />
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
