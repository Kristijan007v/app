import React from "react";
import { Loading } from "@nextui-org/react";

export default function ButtonDefault({
  text,
  style,
  onclick,
  link,
  href,
  linkIcon,
  ariaLabel,
  loading,
  form,
  type,
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
          form={form}
          type={type}
        >
          {text}
        </button>
      ) : linkIcon ? (
        <button className={`${style}`} onClick={onclick}>
          {text}
        </button>
      ) : loading ? (
        <button className={`${style} btn__default`} onClick={onclick}>
          <Loading>{text}</Loading>
        </button>
      ) : (
        <button className={`btn__default ${style}`} onClick={onclick}>
          {text}
        </button>
      )}
    </>
  );
}
