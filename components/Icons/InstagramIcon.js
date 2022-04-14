import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

export default function InstagramIcon({ onclick, link, href }) {
  return (
    <>
      {link ? (
        <IconContext.Provider
          value={{
            className: "link__icon",
          }}
        >
          <AiOutlineInstagram />
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
