import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

export default function Custom404() {
  return (
    <>
      <Navigation />
      <div className="m-6 flex h-screen flex-col items-center justify-center">
        <p className="text-center font-sans text-8xl font-extrabold text-blue-600 lg:text-9xl">
          404
        </p>
        <p className="-mt-6 pb-10 text-center font-sans text-4xl font-semibold text-lightHeadingPrimary dark:text-headingPrimary lg:text-6xl">
          Page Not Found
        </p>
        <ButtonDefault text={"Go back to the homepage"} link href={"/"} />
      </div>
      <Footer />
    </>
  );
}
