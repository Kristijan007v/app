import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkDefault from "../../LinkDefault/LinkDefault";
import Card from "../../Card/Card";
import Image from "next/image";
import PortifolioCard from "../../PortifolioCard/PortifolioCard";

export default function Projects() {
  const project = [
    {
      id: 1,
      year: "2020",
      name: "SS Portal",
      desc: "I made this projects while working as System Administrator at RTL Croatia d.o.o because we needed a solution for storing notes, passwords, scripts and solutions to some common problems we were facing everyday.",
      programmingLanguages: "HTML | CSS | JS | PHP",
      href: "https://ss-portal.kristijan-projects.xyz/",
      github: false,
    },
    {
      id: 2,
      year: "2021",
      name: "Se@rchitup",
      desc: 'I made a fake search engine for the movie "Glava velike ribe" which will be released in the year 2022. The goal was to make a fast, nice looking and functional "search engine". Search engine displays data from the database with the possibilty of inserting fake search results.',
      href: "https://devclub.vercel.app/",
      programmingLanguages: "HTML | CSS | JS | PHP",
      href: "https://searchitup.kristijan-projects.xyz/",
      github: false,
    },
    {
      id: 3,
      year: "2022",
      name: "KV Blog",
      desc: "My personal blog for posting usefull tips and tricks for web development and also tech news. The goal was to make nice looking, responsive and fast website for the best user experience.",
      programmingLanguages: "Next.js | Tailwind CSS | Sanity CMS",
      href: "https://devclub.vercel.app/",
      github: true,
      githubLink: "https://github.com/kristijan007v",
    },
    {
      id: 4,
      year: "2017",
      name: "Pixel Brick",
      desc: "This is an Android game I made with my friend when we were in highschool. We wanted to make easy and fun retro game that brings you back in your childhood.",
      programmingLanguages: "Construct 3",
      href: "https://drive.google.com/file/d/1NeLeSh-JmbV2Y-TcguOODshvykxO33Lu/view?usp=sharing",
      github: false,
    },
  ];
  return (
    <div className="border__default container__xl flex flex-col pb-20">
      <SectionHeading
        title="Portifolio"
        number={"02"}
        desciption={"Here are some of the websites I made for my clients."}
      />

      {/* PORTIFOLIO CARDS */}
      <div className="flex flex-col">
        <PortifolioCard />
      </div>

      <div className="mb-6 flex flex-col space-y-4 p-4 text-center md:mb-8">
        <h2 className="heading__default__2">My personal projects</h2>
        <LinkDefault
          href="/projects"
          text="See all projects"
          align={"center"}
        />
      </div>
      <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {project &&
          project.map(
            ({
              id,
              year,
              name,
              desc,
              programmingLanguages,
              href,
              github,
              githubLink,
            }) => (
              <Card
                key={id}
                year={year}
                title={name}
                desc={desc}
                programmingLanguages={programmingLanguages}
                href={`${href}`}
                linkicon={true}
                github={github}
                githubLink={githubLink}
              />
            )
          )}
      </section>
    </div>
  );
}
