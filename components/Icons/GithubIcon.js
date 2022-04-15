import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";

export default function GithubIcon({ onclick, link, href }) {
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
          <AiOutlineGithub onClick={visitLink} />
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
