import { React, useEffect } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

export default function Backdrop({ children }) {
  useEffect(() => {
    disableBodyScroll(document);

    return () => {
      enableBodyScroll(document);
    };
  }, []);

  return (
    <div className="overlay flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
