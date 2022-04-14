import React from "react";
import { IconContext } from "react-icons";
import { BiFolder } from "react-icons/bi";

export default function FolderIcon({ onclick, link, href }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__special",
        }}
      >
        <BiFolder />
      </IconContext.Provider>
    </>
  );
}
