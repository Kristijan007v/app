import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function GithubIcon({ onclick, link, href }) {
  const visitLink = () => {
    window.location.href = `${href}`;
  };

  return (
    <>
      {link ? (
        <IconContext.Provider
          value={{
            className:
              "text-2xl font-semibold text-lightGrayP hover:cursor-pointer hover:text-blue-600 dark:text-grayP",
          }}
        >
          <FaGithub onClick={visitLink} />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <FaGithub />
        </IconContext.Provider>
      )}
    </>
  );
}
