import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import ButtonDefault from "../../Buttons/ButtonDefault";
import SectionHeading from "../../SectionHeading/SectionHeading";

export default function About() {
  const toastStyle = [
    {
      position: "bottom-center",
      style: {
        borderRadius: "10px",
        background: "rgb(21, 28, 38, 60%)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        border: "1px solid rgb(29, 78, 216)",
      },
    },
  ];

  const downloadFile = () => {
    toast("🤞 Please wait...", toastStyle[0]);
    setTimeout(() => {
      toast("😁 Testing your patience...", toastStyle[0]);
      setTimeout(() => {
        toast("❤️ Okay here you go, sorry!", toastStyle[0]);
        window.location.href = "/documents/resume.pdf";
      }, 4200);
    }, 4000);
  };

  return (
    <div
      id="about"
      className="border__default flex flex-col space-y-6 lg:flex-row"
    >
      <SectionHeading
        title="About"
        number={"01"}
        desciption={"Let me introduce myself."}
        align={"left"}
      />
      <div className="relative h-72 w-full">
        <Image
          priority
          className="mask mask-squircle grayscale hover:grayscale-0"
          alt={"Article Image"}
          src={"/images/my_photo.webp"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col space-y-6">
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
            <code>print(education)</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Highscool: Gimnazija Sesvete (2015-2019)</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
        <ButtonDefault
          text={"Download My Resume"}
          onclick={downloadFile}
          ariaLabel={"Download my resume"}
        />
      </div>
    </div>
  );
}
