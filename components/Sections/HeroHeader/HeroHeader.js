import React from "react";
import ButtonDefault from "../../Buttons/ButtonDefault";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import LinkDefault from "../../LinkDefault/LinkDefault";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <div className="container__xl flex max-h-screen flex-col justify-center space-y-8 md:min-h-screen md:items-center">
      <div className="flex flex-col space-y-4 rounded-tr-lg md:border-t-4 md:border-r-4 md:border-blue-700/80 md:p-8">
        <div className="avatar">
          <div className="relative w-24 rounded-full ring ring-blue-600 ring-offset-2 ring-offset-base-100">
            <Image
              src="/images/my_photo.webp"
              alt="My profile photo"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </div>
        <p className="special text-lg lg:text-xl">Hi, my name is</p>
        <h1 className="font-sans text-4xl font-extrabold text-lightHeadingPrimary dark:text-headingPrimary lg:text-6xl">
          Kristijan Vidović.
        </h1>
        <h2 className="font-sans text-4xl font-extrabold text-lightHeadingSecondary dark:text-headingSecondary lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="p__default">
          Frontend developer who&apos;s favourite JS Framework is Svelte, who
          got in love with Tailwind CSS and just loves to programm stuff. Python
          all the way. 😊
        </p>
      </div>
      <ButtonDefault
        text={"Check out my blog"}
        link
        href={"https://devclub.vercel.app"}
      />
    </div>
  );
}
