import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="mt-16 mb-2 flex flex-col space-y-4 p-4 text-center">
      <div className="flex items-center justify-center space-x-4">
        <GithubIcon link href={"https://github.com/kristijan007v"} />
        <InstagramIcon link href={"https://instagram.com/kristijan_007"} />
        <LinkedinIcon
          link
          href={"https://www.linkedin.com/in/kristijan-vidovic-05598b1b5"}
        />
      </div>
      <p className="font-mono text-sm font-medium text-gray-600 dark:text-graySpecial md:text-lg">
        Designed and made by Kristijan Vidović
      </p>
    </footer>
  );
}
