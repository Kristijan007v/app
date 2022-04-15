import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineWbSunny } from "react-icons/md";

export default function SunIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-2xl text-lightGrayP dark:text-grayP cursor-pointer",
        }}
      >
        <MdOutlineWbSunny onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
