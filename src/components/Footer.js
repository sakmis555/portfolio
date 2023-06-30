import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:border-light
    sm:text-base "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} All Rights Reserved</span>
        <div className="flex items-center lg:py-2">&copy; Saksham Mishra</div>
        <Link href="/"></Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
