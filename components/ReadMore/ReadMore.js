import { React, useState } from "react";

export default function ReadMore({ children, maxLength }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="p__default">
      {isReadMore ? text.slice(0, maxLength) : text}
      <span onClick={toggleReadMore} className="uppercase text-blue-500">
        {isReadMore ? "..." : ""}
        {isReadMore ? " read more" : " show less"}
      </span>
    </p>
  );
}
