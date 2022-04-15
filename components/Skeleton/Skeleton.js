import Navigation from "../Navigation/Navigation";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import InfoButton from "../Buttons/InfoButton";
import InfoOverlay from "../InfoOverlay/InfoOverlay";
import { React, useState } from "react";

export default function Skeleton({ children }) {
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false);

  const openInfoOverlay = () => {
    setIsInfoOverlayOpen(true);
  };

  const closeInfoOverlay = () => {
    setIsInfoOverlayOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <ErrorBoundary moduleName={"Navigation"}>
        <Navigation />
      </ErrorBoundary>

      <ErrorBoundary moduleName={"Main"}>
        {/* Here goes the main content */}
        <main className="m-6">{children}</main>
      </ErrorBoundary>

      {/* Footer */}
      <ErrorBoundary moduleName={"Footer"}>
        <Footer />
      </ErrorBoundary>

      {/* Fixed buttons */}
      <InfoButton onclick={openInfoOverlay} />

      {/* OVERLAYS */}
      {isInfoOverlayOpen && <InfoOverlay closeOverlay={closeInfoOverlay} />}
    </>
  );
}
