import React from "react";

export default function ButtonDefault({
  text,
  style,
  onclick,
  link,
  href,
  linkIcon,
  ariaLabel,
}) {
  const visitLink = () => {
    window.location.href = `${href}`;
  };

  return (
    <>
      {link ? (
        <button
          className={`btn__default ${style}`}
          onClick={visitLink}
          aria-label={ariaLabel}
        >
          {text}
        </button>
      ) : linkIcon ? (
        <button className={`${style}`} onClick={onclick}>
          {text}
        </button>
      ) : (
        <button className={`btn__default ${style}`} onClick={onclick}>
          {text}
        </button>
      )}
    </>
  );
}
