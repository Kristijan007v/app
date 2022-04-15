import { React, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import SectionHeading from "../SectionHeading/SectionHeading";
import validator from "validator";
import toast from "react-hot-toast";

export default function ContactForm() {
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

  const notification = (message) => {
    toast(message, toastStyle[0]);
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      notification("Message sent succesfully!");
    } else {
      notification("Enter valid Email!");
      e.preventDefault();
    }
  };

  return (
    <div
      className="border__default container flex flex-col space-y-6 pb-14"
      id="contact-me"
    >
      <SectionHeading
        number="03"
        title="Get in Touch"
        desciption={"Feel free to contact me and ask me anything you want. 😊"}
      />
      <form className="flex flex-col space-y-4">
        <label className="label__default">Name:</label>
        <input
          required
          className="input__default"
          name={"fullname"}
          id="fullname"
          type={"text"}
        />
        <label className="label__default">Email address:</label>
        <input
          required
          className="input__default"
          type={"email"}
          name={"email"}
          id="email"
          onChange={validateEmail}
        />
        <label className="label__default">Message:</label>
        <textarea
          name={"message"}
          id="message"
          required
          className="textarea__default"
          rows={"10"}
        />
      </form>
      <ButtonDefault
        text={"Say hello!"}
        onclick={() => notification("💌 Message sent succesfully!")}
      />
    </div>
  );
}
