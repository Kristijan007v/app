import Image from "next/image";
import React from "react";
import ButtonDefault from "../../Buttons/ButtonDefault";

export default function HeroHeader() {
  return (
    <div className="container__xl flex max-h-screen flex-col justify-center space-y-8 md:min-h-screen md:items-center">
      <div className="flex flex-col space-y-4 rounded-tr-lg md:border-t-4 md:border-r-4 md:border-blue-700/80 md:p-8">
        <div className="avatar">
          <div className="relative w-24 rounded-full ring ring-blue-600 ring-offset-2 ring-offset-base-100">
            <Image
              src="/images/my_picture.jpg"
              alt="My profile photo"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </div>
        <p className="special font-mono text-lg lg:text-xl">Hi, my name is</p>
        <h1 className="font-sans text-4xl font-extrabold text-lightHeadingPrimary dark:text-headingPrimary lg:text-6xl">
          Kristijan Vidović.
        </h1>
        <h2 className="font-sans text-4xl font-extrabold text-lightHeadingSecondary dark:text-headingSecondary lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="p__default">
          Frontend developer who&apos;s favourite JS Framework is{" "}
          <a
            className="text-blue-500 underline-offset-4 hover:underline"
            href="https://nextjs.org/"
          >
            Next.js
          </a>
          , who got in love with{" "}
          <a
            className="text-blue-500 underline-offset-4 hover:underline"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>{" "}
          and just loves to programm stuff 😊. Typecript is a life saver. 😅
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
