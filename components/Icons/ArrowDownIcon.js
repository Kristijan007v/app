import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

export default function ArrowDownIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__special",
        }}
      >
        <IoIosArrowDown />
      </IconContext.Provider>
    </>
  );
}
