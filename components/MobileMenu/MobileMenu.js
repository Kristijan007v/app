import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ButtonDefault from "../Buttons/ButtonDefault";
import Link from "next/link";

export default function MobileMenu({ closeMenu }) {
  return (
    <Backdrop>
      <div className="flex flex-col items-center justify-center space-y-6">
        <ButtonDefault text={"Close"} onclick={closeMenu} />
        <ul className=" flex flex-col space-y-8 text-center">
          <li>
            <Link href={"/"}>
              <a className="link__mobile">
                <span className="special">01.</span> About
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="link__mobile">
                {" "}
                <span className="special">02.</span> Portifolio
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="link__mobile">
                {" "}
                <span className="special">03.</span> Contact me
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/documents/resume.pdf"}>
              <a className="btn__default">My Resume</a>
            </Link>
          </li>
        </ul>
      </div>
    </Backdrop>
  );
}
