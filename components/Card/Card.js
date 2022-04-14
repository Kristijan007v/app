import React from "react";
import FolderIcon from "../Icons/FolderIcon";
import LinkIcon from "../Icons/LinkIcon";

export default function Card({ title, programmingLanguages }) {
  return (
    <div className="rounded-md bg-secondaryGray p-6 flex flex-col space-y-4 hover__translate">
      <div className="flex justify-between items-center">
        <FolderIcon />
        <LinkIcon />
      </div>
      <h3 className="heading__default_3">{title}</h3>
      <p className="p__default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque quia quidem, quam quisquam dolorum, quibusdam.
      </p>
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
