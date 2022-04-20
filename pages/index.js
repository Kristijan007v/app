import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import About from "../components/Sections/About/About";
import HeroHeader from "../components/Sections/HeroHeader/HeroHeader";
import Projects from "../components/Sections/Projects/Projects";
import Skeleton from "../components/Skeleton/Skeleton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to my website. Here you can find information about me and my projects. If you like, you can follow me on Linkedin and GitHub. Feel free to contact me for more information about my projects."
        ></meta>
      </Head>
      <Skeleton>
        <div className="container flex flex-col space-y-12">
          {/* HERO HEADER */}
          <HeroHeader />
          {/* 01. ABOUT */}
          <div id="about" className="p-6"></div>
          <ErrorBoundary moduleName={"About"}>
            <About />
          </ErrorBoundary>
          {/* 02. MY PROJECTS */}
          <div id="portifolio" className="p-6"></div>
          <ErrorBoundary moduleName={"Projects"}>
            <Projects />
          </ErrorBoundary>
          {/* 03. CONTACT ME */}
          <div id="contact-me" className="p-6"></div>
          <ErrorBoundary moduleName={"ContactForm"}>
            <ContactForm />
          </ErrorBoundary>
        </div>
      </Skeleton>
    </>
  );
}
