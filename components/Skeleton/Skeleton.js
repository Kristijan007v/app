import Navigation from "../Navigation/Navigation";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import InfoButton from "../Buttons/InfoButton";

export default function Skeleton({ children }) {
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
      <InfoButton />
    </>
  );
}
