import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <div>
        <Link href="/about">about</Link>
      </div>

      <div>
        <Link href="/profile">profile</Link>
      </div>

      <div>
        <Link href="/blog">blog</Link>
      </div>

      <div>
        <Link href="/products">products</Link>
      </div>
      <div>
        <Link href="/docs">docs</Link>
      </div>
    </>
  );
}
