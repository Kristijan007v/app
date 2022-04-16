import React from "react";
import InfoIcon from "../Icons/InfoIcon";

export default function InfoButton({ onclick }) {
  return (
    <button
      className="fixed bottom-4 right-2 z-20 rounded-full bg-lightSecondaryGray/50 p-4 backdrop-blur-lg dark:bg-gray-800/50"
      onClick={onclick}
      aria-label="Website information"
    >
      <InfoIcon />
    </button>
  );
}
