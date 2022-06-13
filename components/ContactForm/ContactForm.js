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

  return (
    <div className="border__default container__md flex flex-col space-y-10 pb-10">
      <SectionHeading
        number="03"
        title="Get in Touch"
        desciption={"Feel free to contact me and ask me anything you want. 😊"}
      />
      <form
        className="n flex flex-col space-y-5"
        name="contact__form"
        id="contact__form"
        action="https://getform.io/f/96a58708-2d04-4b81-b52d-6f61841a45b3"
        method="POST"
      >
        <label className="label__default" htmlFor="fullname">
          Name:
        </label>
        <input
          required
          className="input__default"
          name={"fullname"}
          id="fullname"
          type={"text"}
        />
        <label className="label__default" htmlFor="email">
          Email address:
        </label>
        <input
          required
          className="input__default"
          type={"email"}
          name={"email"}
          id="email"
        />
        <label className="label__default" htmlFor="message">
          Message:
        </label>
        <textarea
          name={"message"}
          id="message"
          required
          className="textarea__default"
          rows={"10"}
        />
      </form>
      <input
        form="contact__form"
        className="m-auto mt-20 w-full rounded bg-blue-600 py-2 px-4 font-semibold text-white hover:cursor-pointer hover:bg-blue-700 md:w-2/6 2xl:w-1/6"
        type="submit"
        value="Say hello!"
      />
    </div>
  );
}
