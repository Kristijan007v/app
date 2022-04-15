import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useEffect, useState, React } from "react";
import { Loading } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PortifolioCard({ reverse }) {
  const portifolio = [
    {
      id: 1,
      year: "2020",
      name: "Crofloor.com",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      programmingLanguages: "Next.js | Tailwind | Strapi CMS",
      href: "https://crofloor.com/",
      src: "/images/portifolio/crofloor.png",
    },
    {
      id: 2,
      year: "2020",
      name: "BDF Logistics d.o.o",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      programmingLanguages: "HTML | CSS | JS | PHP",
      href: "https://bdf-logistics.hr/",
      src: "/images/portifolio/crofloor.png",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

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

  return (
    <>
      {portifolio &&
        portifolio.map(
          ({ id, name, desc, programmingLanguages, href, src }) => {
            return (
              <div
                className={`m-auto flex w-full flex-col -space-y-14  lg:w-4/5 lg:flex-row lg:items-center lg:-space-x-14 ${
                  reverse && "lg:flex-row-reverse"
                }`}
              >
                <motion.div
                  variants={zoom}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative h-96 w-full"
                >
                  {loaded ? (
                    <Image
                      priority
                      className="hidden cursor-pointer rounded-lg grayscale hover:grayscale-0 md:block"
                      src={src}
                      layout="fill"
                      objectFit="cover"
                      alt={"My Photo"}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-lightSecondaryGray shadow-xl dark:bg-secondaryGray">
                      <Loading size="xl" />
                    </div>
                  )}
                </motion.div>
                <div
                  className={`z-10 flex flex-col items-center space-y-6 ${
                    reverse ? "lg:items-start" : "lg:items-end"
                  } lg:space-y-2`}
                >
                  <p className="heading__default_3 hidden lg:block">{name}</p>
                  <div className="flex flex-col justify-between space-y-4 rounded-lg bg-lightSecondaryGray/60 p-8 shadow-xl backdrop-blur-xl dark:bg-secondaryGray/60">
                    <p className="p__special block text-left lg:hidden">
                      {programmingLanguages}
                    </p>
                    <p className="heading__default_3 block lg:hidden">{name}</p>
                    <p className="text-left md:text-center">{desc}</p>
                    <ButtonDefault text={"Visit website"} link href={href} />
                  </div>

                  <p className="p__special hidden pb-4 lg:block">
                    {programmingLanguages}
                  </p>
                </div>
              </div>
            );
          }
        )}
    </>
  );
}
