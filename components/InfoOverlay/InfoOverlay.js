import { Link } from "next/link";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import BackdropNew from "../BackdropNew/BackdropNew";
import ButtonDefault from "../Buttons/ButtonDefault";
import Textbox from "../Textbox/Textbox";

export default function InfoOverlay({ closeOverlay }) {
  return (
    <Backdrop onclick={closeOverlay} animationType={"bottom"} modal>
      <div className="m-3">
        <Textbox
          title={"Website info"}
          text={
            "This website was made with Next.js, Framer Motion, and Tailwind CSS."
          }
          closeModal={closeOverlay}
          footer
        >
          Feel free to open an issue or contribute to the project on
          <a
            className="text-blue-500 underline-offset-4 hover:underline"
            href="https://github.com/Kristijan007v/kristijan-me"
          >
            {" "}
            Github{" "}
          </a>
          .
        </Textbox>
      </div>
    </Backdrop>
  );
}
