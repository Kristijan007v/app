import React from "react";

export default function Backdrop({ children }) {
  return <div className="overlay">{children}</div>;
}
