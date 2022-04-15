import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";
import Textbox from "../Textbox/Textbox";

export default function InfoOverlay({ closeOverlay }) {
  return (
    <Backdrop>
      <ButtonDefault text={"Close"} onclick={closeOverlay} />
      <div className="mt-6">
        <Textbox
          title={"Website info"}
          text={"This website was created by me."}
        />
      </div>
    </Backdrop>
  );
}
