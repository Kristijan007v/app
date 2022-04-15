import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";
import Link from "next/link";
import Textbox from "../Textbox/Textbox";

export default function MobileMenu({ closeMenu }) {
  return (
    <Backdrop onclick={closeMenu} buttonBottom animationType={"top"}>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6">
        <ul className=" flex flex-col space-y-8 text-center">
          <li>
            <Link href={"/#about"}>
              <a className="link__mobile">
                <span className="special">01.</span> About
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/#portifolio"}>
              <a className="link__mobile">
                {" "}
                <span className="special">02.</span> Portifolio
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/#contact-me"}>
              <a className="link__mobile">
                {" "}
                <span className="special">03.</span> Contact me
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Backdrop>
  );
}
