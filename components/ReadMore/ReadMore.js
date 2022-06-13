import { React, useState } from "react";

export default function ReadMore({ children, maxLength }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="p__default">
        {isReadMore ? text.slice(0, maxLength) : text}
        {isReadMore ? "..." : ""}
      </p>
      <span
        onClick={toggleReadMore}
        className="rounded-md bg-lightSecondaryGray p-1.5 text-center font-semibold hover:cursor-pointer dark:bg-gray-700 dark:font-normal"
      >
        {isReadMore ? " Read more" : " Show less"}
      </span>
    </>
  );
}
