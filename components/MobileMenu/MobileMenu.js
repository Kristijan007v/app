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
          <li className="flex flex-col space-y-2">
            <span className="special link__mobile">01.</span>
            <Link href={"/#about"}>
              <a className="link__mobile">About</a>
            </Link>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="special link__mobile">02.</span>
            <Link href={"/#portifolio"}>
              <a className="link__mobile"> Portifolio</a>
            </Link>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="special link__mobile">03.</span>
            <Link href={"/#contact-me"}>
              <a className="link__mobile"> Contact me</a>
            </Link>
          </li>
        </ul>
      </div>
    </Backdrop>
  );
}
