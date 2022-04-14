import { React, useState } from "react";
import Link from "next/link";
import ButtonDefault from "../Buttons/ButtonDefault";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between bg-blue-100/60 p-4 text-gray-100 backdrop-blur-xl dark:bg-gray-800/60 md:p-6">
        <Link href={"/"}>
          <a className="logo text-2xl font-bold text-blue-700">KV</a>
        </Link>

        <ul className="hidden space-x-4 md:flex">
          <li>
            <Link href={"/"}>
              <a className="link__default">
                <span className="special">01.</span> About
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="link__default">
                {" "}
                <span className="special">02.</span> Portifolio
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="link__default">
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

        {/* Mobile menu button */}
        <ButtonDefault
          text={"Menu"}
          style={"block md:hidden"}
          onclick={openMenu}
        />
      </nav>
      {/* MobileMenu POPUP */}
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </>
  );
}
