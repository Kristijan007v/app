import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="mb-6 p-4 text-center">
      <div className="flex items-center justify-center space-x-4 p-4">
        <GithubIcon />
        <InstagramIcon />
        <LinkedinIcon />
      </div>
      <p className="text-base font-semibold text-gray-600 dark:text-graySpecial md:text-lg lg:text-xl">
        Designed and made by Kristijan Vidović
      </p>
    </footer>
  );
}
