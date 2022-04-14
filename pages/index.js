import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import Card from "../components/Card/Card";
import LinkDefault from "../components/LinkDefault/LinkDefault";

export default function Home() {
  return (
    <>
      <Skeleton
        children={
          <>
            {/* Projects list */}
            <div className="flex flex-col space-y-4 p-4 text-center">
              <h2 className="heading__default__2">My personal projects</h2>
              <LinkDefault href="/projects" text="See all projects" />
            </div>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card
                title={"SS Portal"}
                programmingLanguages={"HTML | CSS | JavaScript"}
              />
              <Card title={"SS Portal"} />
              <Card title={"SS Portal"} />
              <Card title={"SS Portal"} />
            </section>
          </>
        }
      />
    </>
  );
}
