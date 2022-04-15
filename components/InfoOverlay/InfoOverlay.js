import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";
import Textbox from "../Textbox/Textbox";

export default function InfoOverlay({ closeOverlay }) {
  return (
    <Backdrop onclick={closeOverlay} closeButton animationType={"bottom"}>
      <div className="m-4">
        <Textbox
          title={"Website info"}
          text={"This website was created by me."}
        />
      </div>
    </Backdrop>
  );
}
