import React from "react";
import Link from "next/link";

export default function LinkDefault({ href, text }) {
  return (
    <Link href={`${href}`}>
      <a className="link__special">{text}</a>
    </Link>
  );
}
