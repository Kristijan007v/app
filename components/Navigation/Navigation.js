import Link from "next/link";
import { React, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-10`}>
      <div className="flex items-center justify-between bg-blue-100/60 p-4 text-gray-100 backdrop-blur-xl dark:bg-gray-800/60 md:p-6">
        <Link href={"/"}>
          <a className="logo text-2xl font-bold text-blue-700">KV</a>
        </Link>

        <ul className="hidden space-x-4 md:flex">
          <li>
            <Link href={"/#about"}>
              <a className="link__default">
                <span className="special">01.</span> About
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/#portifolio"}>
              <a className="link__default">
                {" "}
                <span className="special">02.</span> Portifolio
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/#contact-me"}>
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
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          <ButtonDefault
            text={"Menu"}
            style={"block md:hidden"}
            onclick={openMenu}
          />
        </div>
      </div>
      {/* Content progress bar */}
      {/* MobileMenu POPUP */}
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </nav>
  );
}
