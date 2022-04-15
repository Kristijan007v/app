import React from "react";
import InfoIcon from "../Icons/InfoIcon";

export default function Textbox({ title, text, type }) {
  return (
    <div className="flex items-center space-x-6 rounded-md bg-primaryGray py-6 px-4">
      <InfoIcon />
      <div className="flex flex-col space-y-2">
        <h4 className="text-2xl font-semibold text-white">{title}</h4>
        <p className="p__default">{text}</p>
      </div>
    </div>
  );
}
