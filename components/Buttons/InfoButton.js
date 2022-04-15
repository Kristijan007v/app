import React from "react";
import InfoIcon from "../Icons/InfoIcon";

export default function InfoButton() {
  return (
    <span className="fixed bottom-4 right-2 rounded-full bg-gray-800/60 p-4 backdrop-blur-xl">
      <InfoIcon />
    </span>
  );
}
