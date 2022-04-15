import React from "react";
import { IconContext } from "react-icons";
import { BsInfoCircle } from "react-icons/bs";

export default function InfoIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-2xl text-blue-600",
        }}
      >
        <BsInfoCircle />
      </IconContext.Provider>
    </>
  );
}
