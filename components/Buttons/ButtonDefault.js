import React from "react";
import { Loading } from "@nextui-org/react";
import { motion } from "framer-motion";

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
  ...props
}) {
  const visitLink = () => {
    window.location.href = `${href}`;
  };

  return (
    <>
      {link ? (
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={`btn__default ${style} disabled:bg-gray-700`}
          onClick={visitLink}
          aria-label={ariaLabel}
          form={form}
          type={type}
          {...props}
        >
          {text}
        </motion.button>
      ) : linkIcon ? (
        <motion.button
          whileTap={{
            scale: 0.98,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={`${style}`}
          onClick={onclick}
        >
          {text}
        </motion.button>
      ) : loading ? (
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={`${style} btn__default`}
          onClick={onclick}
        >
          <Loading>{text}</Loading>
        </motion.button>
      ) : (
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={`btn__default ${style}`}
          onClick={onclick}
        >
          {text}
        </motion.button>
      )}
    </>
  );
}
