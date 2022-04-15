import React from "react";
import FolderIcon from "../Icons/FolderIcon";
import LinkIcon from "../Icons/LinkIcon";
import GithubIcon from "../Icons/GithubIcon";

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
    <div className="hover__translate flex flex-col space-y-4 rounded-lg bg-lightSecondaryGray p-6 dark:bg-secondaryGray">
      <div className="flex items-center justify-between">
        <FolderIcon />
        <div className="flex items-center space-x-4">
          {github && <GithubIcon />}
          {linkicon && <LinkIcon href={href} />}
        </div>
      </div>
      <h3 className="heading__special__3">{title}</h3>
      <p className="p__default">{desc}</p>
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
