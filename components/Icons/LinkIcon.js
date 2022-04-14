import React from "react";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkIcon({ onclick, link, href }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__basic",
        }}
      >
        <FaExternalLinkAlt />
      </IconContext.Provider>
    </>
  );
}
