import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";
import Textbox from "../Textbox/Textbox";

export default function InfoOverlay({ closeOverlay }) {
  return (
    <Backdrop onclick={closeOverlay} animationType={"bottom"} modal>
      <div className="m-3">
        <Textbox
          title={"Website info"}
          text={"This website was created by me."}
          closeModal={closeOverlay}
        />
      </div>
    </Backdrop>
  );
}
