import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkDefault from "../../LinkDefault/LinkDefault";
import Card from "../../Card/Card";

export default function Projects() {
  const project = [
    {
      id: 1,
      name: "SS Portal",
      desc: "A web application for students to manage their personal information.",
      programmingLanguages: "React, Redux, Node.js, Express, MongoDB",
      link: "https://ss-portal.xyz",
    },
    {
      id: 2,
      name: "KV Blog",
      desc: "A web application for students to manage their personal information.",
      link: "https://ss-portal.xyz",
    },
  ];
  return (
    <>
      <SectionHeading
        title="Portifolio"
        number={"02"}
        desciption={"Here are some of the websites I made for my clients."}
      />
      <div className="flex flex-col space-y-4 p-4 text-center">
        <h2 className="heading__default__2">My personal projects</h2>
        <LinkDefault href="/projects" text="See all projects" />
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {project &&
          project.map(({ id, name, desc, programmingLanguages }) => (
            <Card
              key={id}
              title={name}
              desc={desc}
              programmingLanguages={programmingLanguages}
            />
          ))}
      </section>
    </>
  );
}
