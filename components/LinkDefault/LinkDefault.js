import React from "react";
import Link from "next/link";

export default function LinkDefault({ href, text, align }) {
  return (
    <Link href={`${href}`}>
      <a
        className={`link__special ${
          align == "center" ? "text-center" : "text-left"
        }`}
      >
        {text}
      </a>
    </Link>
  );
}
