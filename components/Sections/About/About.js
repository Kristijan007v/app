import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";

export default function About() {
  return (
    <>
      <SectionHeading
        title="About"
        number={"01"}
        desciption={"Here are some of the websites I made for my clients."}
        align={"left"}
      />
      <div class="mockup-code bg-secondaryGray">
        <pre data-prefix="$">
          <code>print(date-of-birth)</code>
        </pre>
        <pre data-prefix=">" class="text-warning">
          <code>07.03.2000.</code>
        </pre>
        <pre data-prefix=">" class="text-success">
          <code>Done!</code>
        </pre>
        <pre data-prefix="$">
          <code>print(date-of-birth)</code>
        </pre>
      </div>
    </>
  );
}
