import React from "react";
import FolderIcon from "../Icons/FolderIcon";
import LinkIcon from "../Icons/LinkIcon";
import GithubIcon from "../Icons/GithubIcon";
import ReadMore from "../ReadMore/ReadMore";

export default function Card({
  year,
  title,
  desc,
  programmingLanguages,
  github,
  linkicon,
  href,
  githubLink,
}) {
  return (
    <div className="hover__border flex flex-col justify-between space-y-3 rounded-lg bg-white p-6 shadow-md backdrop-blur-lg dark:bg-secondaryGray">
      <div className="flex items-center justify-between">
        <FolderIcon />
        <div className="flex items-center space-x-5">
          {github && <GithubIcon link href={githubLink} />}
          {linkicon && <LinkIcon href={href} />}
        </div>
      </div>
      <div className="">
        <h3 className="heading__special__3">{title}</h3>
        {/* <div className="fixed top-0 bottom-0 right-0 left-0 hidden items-center justify-center bg-black/50 backdrop-blur-sm group-hover:flex">
          <LinkIcon href={href} />
        </div> */}
      </div>
      <ReadMore maxLength={150}>{desc}</ReadMore>

      <div className="flex space-x-3">
        {programmingLanguages ? (
          <p className="p__special">{programmingLanguages} </p>
        ) : (
          <p className="p__special">
            <span className="text-red-500">Error:</span> Not defined
          </p>
        )}
      </div>
      {/* <p className="special text-center font-medium">Year: {year}</p> */}
    </div>
  );
}
