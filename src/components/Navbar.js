import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
  LeetcodeIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useTemeSwitcher from "./hooks/useTemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  console.log(router);
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light dark:bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useTemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />{" "}
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://leetcode.com/sakmis555/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-8 mx-3 sm:mx-1"
          >
            <LeetcodeIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/sakmis555"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-8 mx-3 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/sakmis555/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-8 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sakmis555/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-8 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/saksham.miishra/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-8 mx-3 sm:mx-1"
          >
            <InstagramIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-50 flex-col flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://leetcode.com/sakmis555/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-8 mx-3 sm:mx-1"
            >
              <LeetcodeIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/sakmis555"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-8 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/sakmis555/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-8 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sakmis555/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-8 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/saksham.miishra/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-8 mx-3 sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
