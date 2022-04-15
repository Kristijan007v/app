import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useEffect, useState, React } from "react";
import { Loading } from "@nextui-org/react";

export default function PortifolioCard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

  return (
    <div className="m-auto flex w-full flex-col -space-y-14 lg:w-4/5 lg:flex-row lg:items-center lg:-space-x-14">
      <div className="relative h-96 w-full">
        {loaded ? (
          <Image
            priority
            className="cursor-pointer rounded-lg grayscale hover:grayscale-0"
            src={"/images/crofloor.png"}
            layout="fill"
            objectFit="cover"
            alt={"My Photo"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-lightSecondaryGray shadow-xl dark:bg-secondaryGray">
            <Loading size="xl" />
          </div>
        )}
      </div>
      <div className="z-10 flex flex-col items-center space-y-6 lg:items-end lg:space-y-2">
        <p className="heading__default_3 hidden lg:block">
          BDF Logistics d.o.o
        </p>
        <div className="flex flex-col justify-between space-y-4 rounded-lg bg-lightSecondaryGray/60 p-8 shadow-xl backdrop-blur-xl dark:bg-secondaryGray/60">
          <p className="p__special block text-left lg:hidden">HTML CSS JS</p>
          <p className="heading__default_3 block lg:hidden">
            BDF Logistics d.o.o
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ButtonDefault
            text={"Visit website"}
            link
            href={"https://bdf-logistics.hr"}
          />
        </div>

        <p className="p__special hidden pb-4 lg:block">HTML CSS JS</p>
      </div>
    </div>
  );
}
