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

  const sendMail = async (data) => {
    try {
      await fetch("https://getform.io/f/96a58708-2d04-4b81-b52d-6f61841a45b3", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      notification("💌 Message sent succesfully!");
    } catch (error) {
      notification("💌 Something went wrong, please try again later!");
    }
  };

  return (
    <div className="border__default container__md flex flex-col space-y-8 pb-10">
      <SectionHeading
        number="03"
        title="Get in Touch"
        desciption={"Feel free to contact me and ask me anything you want. 😊"}
      />
      <form
        className="flex flex-col space-y-4"
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
        <input
          className="rounded bg-blue-600 py-2 px-4 font-semibold text-white hover:bg-blue-700"
          type="submit"
          value="Say hello!"
        />
      </form>
      {/* <ButtonDefault
        type={"submit"}
        form={"contact__form"}
        text={"Say hello!"}
      /> */}
    </div>
  );
}
