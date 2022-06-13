import { React, useState } from "react";
import { Toaster } from "react-hot-toast";
import InfoButton from "../Buttons/InfoButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import InfoOverlay from "../InfoOverlay/InfoOverlay";
import Navigation from "../Navigation/Navigation";
import { AnimatePresence } from "framer-motion";

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
      {/* Toast notifications */}
      <div>
        <Toaster />
      </div>

      {/* Navigation */}
      <ErrorBoundary moduleName={"Navigation"}>
        <Navigation />
      </ErrorBoundary>

      <ErrorBoundary moduleName={"Main"}>
        {/* Here goes the main content */}
        <main className="m-6 flex flex-col items-center justify-center">
          {children}
        </main>
      </ErrorBoundary>

      {/* Footer */}
      <ErrorBoundary moduleName={"Footer"}>
        <Footer />
      </ErrorBoundary>

      {/* Fixed buttons */}
      <InfoButton onclick={openInfoOverlay} />

      {/* OVERLAYS */}
      <AnimatePresence exitBeforeEnter>
        {isInfoOverlayOpen && <InfoOverlay closeOverlay={closeInfoOverlay} />}
      </AnimatePresence>
    </>
  );
}
