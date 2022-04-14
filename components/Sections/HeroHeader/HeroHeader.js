import React from "react";
import ButtonDefault from "../../Buttons/ButtonDefault";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import LinkDefault from "../../LinkDefault/LinkDefault";

export default function HeroHeader() {
  return (
    <>
      <div className="flex flex-col space-y-4 rounded-tr-lg border-t-4 border-r-4 border-blue-700/80 p-8">
        <p className="special text-lg lg:text-xl">Hi, my name is</p>
        <h1 className="font-sans text-4xl font-extrabold text-gray-900 dark:text-gray-300 lg:text-6xl">
          Kristijan Vidović.
        </h1>
        <h2 className="font-sans text-4xl font-extrabold text-gray-600 dark:text-gray-500 lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="p__default">
          Frontend developer who's favourite JS Framework is Svelte, who got in
          love with Tailwind CSS and just loves to programm stuff. Python all
          the way. 😊
        </p>
        <ButtonDefault text={"Check out my blog"} />
      </div>
      <LinkDefault text={"Scroll down to find out more"} align={"center"} />
    </>
  );
}
