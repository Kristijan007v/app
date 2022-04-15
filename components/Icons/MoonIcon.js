import React from "react";
import { IconContext } from "react-icons";
import { BsFillMoonFill } from "react-icons/bs";

export default function MoonIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-xl text-lightGrayP dark:text-grayP cursor-pointer",
        }}
      >
        <BsFillMoonFill onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
