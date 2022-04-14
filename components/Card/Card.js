import React from "react";
import FolderIcon from "../Icons/FolderIcon";
import LinkIcon from "../Icons/LinkIcon";

export default function Card({ title, desc, programmingLanguages }) {
  return (
    <div className="hover__translate flex flex-col space-y-4 rounded-md bg-secondaryGray p-6">
      <div className="flex items-center justify-between">
        <FolderIcon />
        <LinkIcon />
      </div>
      <h3 className="heading__default_3">{title}</h3>
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
    </div>
  );
}
