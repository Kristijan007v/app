import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useEffect, useState, React } from "react";
import { Loading } from "@nextui-org/react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

export default function PortifolioCard({ reverse }) {
  const portifolio = [
    {
      id: 1,
      year: "2020",
      name: "Crofloor.com",
      desc: "My latest website was made for Požgaj Group to strengthen its position on the market and redesign its parquet brand.",
      programmingLanguages: "Next.js | Tailwind | Wordpress CMS",
      href: "https://crofloor.vercel.app/",
      src: "/images/portifolio/crofloor.png",
    },
    {
      id: 2,
      year: "2019",
      name: "BDF Logistics d.o.o",
      desc: "BDF Logistics is a transportation company that delivers goods all around Europe and the goal was to make a simple website with all the needed informations.",
      programmingLanguages: "Wordpress CMS | Divi | JS",
      href: "https://bdf-logistics.hr/",
      src: "/images/portifolio/bdf-logistics.png",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (isVisible) => {
    setIsVisible(isVisible);
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
                key={id}
                className={`m-auto mt-20 mb-20 flex w-full flex-col  -space-y-14 lg:w-4/5 xl:items-center xl:-space-x-14 xl:-space-y-0 ${
                  id % 2 == 0 ? "xl:flex-row-reverse" : "xl:flex-row"
                }`}
              >
                <VisibilitySensor onChange={handleChange}>
                  <motion.div
                    variants={zoom}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative h-96 w-full flex-grow overflow-hidden rounded-xl"
                  >
                    {loaded ? (
                      <Image
                        priority
                        className={`hidden rounded-xl${
                          isVisible ? "grayscale-0 lg:grayscale" : "grayscale"
                        } md:block lg:hover:grayscale-0`}
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
                </VisibilitySensor>
                <div
                  className={`z-10 flex w-4/6 flex-col items-center -space-y-10 md:space-y-6 ${
                    id % 2 == 0
                      ? "xl:translate-x-10 xl:items-start"
                      : "xl:-translate-x-10 xl:items-end"
                  } xl:space-y-3`}
                >
                  <p className="heading__default_3 hidden xl:block">{name}</p>
                  <div className="flex flex-col justify-between space-y-4 rounded-lg bg-lightSecondaryGray/50 p-8 shadow-xl backdrop-blur-lg dark:bg-secondaryGray/50">
                    <p className="heading__default_3 block xl:hidden">{name}</p>
                    <p
                      className={`${id % 2 == 0 ? "text-left" : "text-right"}`}
                    >
                      {desc}
                    </p>
                    <ButtonDefault text={"Visit website"} link href={href} />
                    <p className="p__special block text-left xl:hidden">
                      {programmingLanguages}
                    </p>
                  </div>

                  <p className="p__special hidden pb-4 xl:block">
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
