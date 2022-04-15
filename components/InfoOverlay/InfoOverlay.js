import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";

export default function InfoOverlay({ closeOverlay }) {
  return (
    <Backdrop>
      <ButtonDefault text={"Close"} onclick={closeOverlay} />
      <div>
        <h1>InfoOverlay</h1>
      </div>
    </Backdrop>
  );
}
