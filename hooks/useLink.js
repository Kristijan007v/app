import { React, useState } from "react";

export default function useLink({ href }) {
  const [link, setLink] = useState("");
  setLink(`${href}`);
  window.location.href = `${link}`;
}
