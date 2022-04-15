import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function ContactForm() {
  return (
    <div
      className="container flex scroll-p-0 flex-col space-y-6"
      id="contact-me"
    >
      <SectionHeading
        number="03"
        title="Get in Touch"
        desciption={"Feel free to contact me and ask me anything you want. 😊"}
      />
      <form className="flex flex-col space-y-4">
        <label className="label__default">Name:</label>
        <input className="input__default" type={"text"} />
        <label className="label__default">Email address:</label>
        <input className="input__default" type={"text"} />
        <label className="label__default">Message:</label>
        <textarea className="textarea__default" rows={"10"} />
      </form>
      <ButtonDefault text={"Say hello!"} />
    </div>
  );
}
