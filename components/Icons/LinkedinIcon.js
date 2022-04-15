import React from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function LinkedinIcon({ onclick, link, href }) {
  const visitLink = () => {
    window.location.href = `${href}`;
  };
  return (
    <>
      {link ? (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <AiFillLinkedin onClick={visitLink} />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <AiFillLinkedin />
        </IconContext.Provider>
      )}
    </>
  );
}
