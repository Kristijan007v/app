import React from "react";
import ButtonDefault from "../../Buttons/ButtonDefault";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import LinkDefault from "../../LinkDefault/LinkDefault";

export default function HeroHeader() {
  return (
    <>
      <div className="flex flex-col space-y-4 rounded-tr-lg md:border-t-4 md:border-r-4 md:border-blue-700/80 md:p-8">
        <p className="special text-lg lg:text-xl">Hi, my name is</p>
        <h1 className="font-sans text-4xl font-extrabold text-headingPrimary lg:text-6xl">
          Kristijan Vidović.
        </h1>
        <h2 className="font-sans text-4xl font-extrabold text-headingSecondary lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="p__default">
          Frontend developer who&apos;s favourite JS Framework is Svelte, who
          got in love with Tailwind CSS and just loves to programm stuff. Python
          all the way. 😊
        </p>
        <ButtonDefault text={"Check out my blog"} />
      </div>
      <LinkDefault text={"Scroll down to find out more"} align={"center"} />
    </>
  );
}
