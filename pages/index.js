import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card/Card";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import LinkDefault from "../components/LinkDefault/LinkDefault";
import Navigation from "../components/Navigation/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <main className="m-6">
        {/* Projects list */}
        <div className="text-center flex flex-col space-y-4 p-4">
          <h2 className="heading__default__2">My personal projects</h2>
          <LinkDefault href="/projects" text="See all projects" />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title={"SS Portal"}
            programmingLanguages={"HTML | CSS | JavaScript"}
          />
          <Card title={"SS Portal"} />
          <Card title={"SS Portal"} />
          <Card title={"SS Portal"} />
        </section>
      </main>

      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
