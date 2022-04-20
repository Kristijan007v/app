import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = async (data) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      //if sucess do whatever you like, i.e toast notification
      setTimeout(() => reset(), 2000);
    } catch (error) {
      // toast error message. whatever you wish
    }
  };

  return (
    <form onSubmit={sendMail} className={"m-4 flex flex-col space-y-4"}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        {...register("Name", { required: true, maxLength: 80 })}
      />
      <input
        required
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        required
        id="message"
        name="message"
        {...register("Message", { required: true, maxLength: 250 })}
      />

      <input type="submit" />
    </form>
  );
}
