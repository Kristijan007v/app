import React from "react";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkIcon({ onclick, link, href }) {
  const visitLink = () => {
    window.location.href = `${href}`;
  };

  return (
    <>
      <button onClick={visitLink} aria-label={"Link to project"}>
        <IconContext.Provider
          value={{
            className: "icon__basic",
          }}
        >
          <FaExternalLinkAlt />
        </IconContext.Provider>
      </button>
    </>
  );
}
