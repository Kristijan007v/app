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
      x: "100vh",
      opacity: 0,
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
      x: "-100vh",
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

  const dropInRight = {
    hidden: {
      x: "-100vh",
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

  useEffect(() => {
    disableBodyScroll(document);

    return () => {
      enableBodyScroll(document);
    };
  }, []);

  return (
    <AnimatePresence
      initial={true}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`overlay flex flex-col ${
          modal ? "justify-end md:justify-center" : "justify-center"
        } items-center  ${style}`}
        onClick={onclick}
      >
        {closeButton && <ButtonDefault text={"Close"} onclick={onclick} />}

        <motion.div
          variants={
            animationType == "bottom"
              ? dropInBottom
              : animationType == "top"
              ? dropInTop
              : animationType == "left"
              ? dropInLeft
              : dropInRight
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
    </AnimatePresence>
  );
}
