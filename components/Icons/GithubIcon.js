import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

export default function GithubIcon({ onclick, link, href }) {
  return (
    <>
      {link ? (
        <IconContext.Provider
          value={{
            className: "link__icon",
          }}
        >
          <AiOutlineGithub />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <AiOutlineGithub />
        </IconContext.Provider>
      )}
    </>
  );
}
