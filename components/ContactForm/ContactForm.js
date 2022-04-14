import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function ContactForm() {
  return (
    <div className="container flex flex-col space-y-6">
      <SectionHeading
        number="01"
        title="Contact Form"
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
    </div>
  );
}
