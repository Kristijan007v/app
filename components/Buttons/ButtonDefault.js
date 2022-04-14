import React from "react";

export default function ButtonDefault({ text, style, onclick }) {
  return (
    <button className={`btn__default ${style}`} onClick={onclick}>
      {text}
    </button>
  );
}
