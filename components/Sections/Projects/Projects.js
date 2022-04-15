import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkDefault from "../../LinkDefault/LinkDefault";
import Card from "../../Card/Card";
import Image from "next/image";

export default function Projects() {
  const project = [
    {
      id: 1,
      year: "2020",
      name: "SS Portal",
      desc: "A web application for students to manage their personal information.",
      programmingLanguages: "React, Redux, Node.js, Express, MongoDB",
      href: "https://ss-portal.kristijan-projects.xyz/",
    },
    {
      id: 2,
      year: "2022",
      name: "KV Blog",
      desc: "A web application for students to manage their personal information.",
      href: "https://devclub.vercel.app/",
    },
  ];
  return (
    <div
      id="portifolio"
      className="border__default flex flex-col space-y-6 pb-20"
    >
      <SectionHeading
        title="Portifolio"
        number={"02"}
        desciption={"Here are some of the websites I made for my clients."}
      />
      <div className="bg-primaryGray mockup-window border">
        <div className="flex justify-center bg-gray-800 px-4 py-16">
          <div>Here goes the image.</div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-4 text-center">
        <h2 className="heading__default__2">My personal projects</h2>
        <LinkDefault
          href="/projects"
          text="See all projects"
          align={"center"}
        />
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {project &&
          project.map(
            ({ id, year, name, desc, programmingLanguages, href }) => (
              <Card
                key={id}
                year={year}
                title={name}
                desc={desc}
                programmingLanguages={programmingLanguages}
                href={`${href}`}
                linkicon={true}
              />
            )
          )}
      </section>
    </div>
  );
}
