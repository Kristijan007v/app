import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import InfoIcon from "../Icons/InfoIcon";

export default function Textbox({
  title,
  text,
  type,
  closeModal,
  footer,
  children,
}) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-lightSecondaryGray p-8 dark:bg-primaryBg">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <InfoIcon />
          <h4 className="heading__default__2 text-2xl font-semibold">
            {title}
          </h4>
        </div>
        {/* Footer */}

        <p className="p__default flex flex-col space-y-3 rounded-md  p-3">
          <span>{text}</span>
          <span>{children}</span>
        </p>

        <ButtonDefault text={"Close"} onclick={closeModal} />
      </div>
    </div>
  );
}
