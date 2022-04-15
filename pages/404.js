import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

export default function Custom404() {
  return (
    <>
      <Navigation />
      <div className="m-6 flex h-screen flex-col items-center justify-center space-y-4">
        <p className="text-center font-sans text-8xl font-extrabold text-primaryBlue lg:text-9xl">
          404
        </p>
        <p className="pb-6 text-center font-sans text-4xl font-semibold text-lightHeadingSecondary dark:text-headingSecondary lg:text-6xl">
          Page Not Found
        </p>
        <ButtonDefault text={"Go back to the homepage"} link href={"/"} />
      </div>
      <Footer />
    </>
  );
}
