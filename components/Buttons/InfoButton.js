import React from "react";
import InfoIcon from "../Icons/InfoIcon";

export default function InfoButton({ onclick }) {
  return (
    <button
      className="fixed bottom-4 right-2 rounded-full bg-white/60 p-4 backdrop-blur-xl dark:bg-gray-800/60"
      onClick={onclick}
      aria-label="Website information"
    >
      <InfoIcon />
    </button>
  );
}
