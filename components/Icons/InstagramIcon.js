import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

export default function InstagramIcon({ onclick, link, href }) {
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
          <AiOutlineInstagram onClick={visitLink} />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <AiOutlineInstagram />
        </IconContext.Provider>
      )}
    </>
  );
}
