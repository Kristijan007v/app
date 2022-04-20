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
}) {
  return (
    <div className="hover__translate flex flex-col justify-between space-y-2 rounded-lg bg-lightSecondaryGray p-6 shadow-md backdrop-blur-lg dark:bg-secondaryGray">
      <div className="flex items-center justify-between">
        <FolderIcon />
        <div className="flex items-center space-x-4">
          {github && <GithubIcon />}
          {linkicon && <LinkIcon href={href} />}
        </div>
      </div>
      <h3 className="heading__special__3">{title}</h3>
      <ReadMore maxLength={150}>{desc}</ReadMore>

      <div className="flex space-x-2">
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
