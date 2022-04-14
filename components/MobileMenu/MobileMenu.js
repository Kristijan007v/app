import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";

export default function MobileMenu({ closeMenu }) {
  return (
    <Backdrop>
      <div className="">
        <ButtonDefault text={"Close"} onclick={closeMenu} />
      </div>
    </Backdrop>
  );
}
