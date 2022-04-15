import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import Image from "next/image";

export default function About() {
  return (
    <>
      <SectionHeading
        title="About"
        number={"01"}
        desciption={"Here are some of the websites I made for my clients."}
        align={"left"}
      />
      <div className="relative h-72 w-full">
        <Image
          priority
          className="rounded-md grayscale"
          alt={"Article Image"}
          src={"/images/my_photo.webp"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mockup-code bg-secondaryGray">
        <pre data-prefix="$">
          <code>print(date-of-birth)</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>07.03.2000.</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
        <pre data-prefix="$">
          <code>print(date-of-birth)</code>
        </pre>
      </div>
    </>
  );
}
