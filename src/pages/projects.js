import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/talkgpt-pic.jpg";
import project2 from "../../public/images/projects/efg-pic.jpg";
import project3 from "../../public/images/projects/news-assistant-pic.jpg";
import project4 from "../../public/images/projects/React-pizza-app-pic.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-dark text-lg font-semibold underline dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="TalkGPT"
                img={project1}
                summary="A powerful chatbot like ChatGPT, that uses Next.js v13 for 
                implementation, OpenAI API for fetching responses, Next JS edge
                 functions to stream chat responses, TailwindCSS for stying the 
                 UI, MongoDB for data storage and Vercel is used for hosting the application."
                link="https://talkgpt-next.vercel.app/"
                github="https://github.com/sakmis555/chatgpt-clone"
                type="Featured / Full Stack Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="News Assistant App"
                img={project3}
                link="https://news-assistant.vercel.app/"
                github="https://github.com/sakmis555/news-assistant"
                type="ReactJS Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Fast React Pizza Co."
                img={project4}
                link="https://fast-react-pizza.netlify.app/"
                github="/"
                type="ReactJS Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Exchange For Good"
                img={project2}
                summary="Online marketplace for selling and buying the reusable products. 
                It has more than 70% functions of Olx App. 
                Seller and Buyers can also place bids on products. 
                Implemented using ReactJS, Axios, Bcrypt.js, TailwindCSS, Express.js, Mongodb and Cloudinary."
                link="https://efg-o8ji.onrender.com/"
                github="https://github.com/sakmis555/efg-exchange-for-good"
                type="Featured / Full Stack Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio"
                img={project1}
                link="/"
                github="https://github.com/sakmis555/portfolio/"
                type="NextJS Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Bill Splitter App"
                img={project1}
                link="https://bill-splitter-react-v1.netlify.app/"
                github="https://github.com/sakmis555/react-projects/tree/master/04.bill-splitter"
                type="ReactJS Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
