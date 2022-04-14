import React from "react";

export default function SectionHeading({ number, title, desciption }) {
  return (
    <div className="text-center flex flex-col space-y-4">
      <h2 className="heading__default__2">
        <span className="special">{`${number}. `}</span>
        {title}
      </h2>
      <p className="p__default">{desciption}</p>
    </div>
  );
}
