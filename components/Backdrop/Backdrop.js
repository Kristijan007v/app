import { React, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import ButtonDefault from "../Buttons/ButtonDefault";

export default function Backdrop({
  children,
  onclick,
  closeButton,
  buttonBottom,
  animationType,
  style,
  modal,
}) {
  const dropInBottom = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
  };

  const dropInTop = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  const dropInLeft = {
    hidden: {
      x: -100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      x: -100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const dropInRight = {
    hidden: {
      x: 100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      x: 100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const zoom = {
    hidden: {
      x: 0,
      y: 0,
      scale: 0.5,
      rotate: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      x: 0,
      y: -60,
      scale: 0.5,
      rotate: 0,
    },
  };

  useEffect(() => {
    disableBodyScroll(document);

    return () => {
      enableBodyScroll(document);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`overlay flex flex-col ${
        modal ? "justify-end md:justify-center" : "justify-center"
      } items-center  ${style}`}
      onClick={onclick}
    >
      {closeButton && <ButtonDefault text={"Close"} onclick={onclick} />}

      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={
          animationType == "bottom"
            ? dropInBottom
            : animationType == "top"
            ? dropInTop
            : animationType == "left"
            ? dropInLeft
            : animationType == "right"
            ? dropInRight
            : animationType == "zoom"
            ? zoom
            : dropInBottom
        }
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
      {buttonBottom && (
        <ButtonDefault text={"Close"} onclick={onclick} style={"mt-8"} />
      )}
    </motion.div>
  );
}
