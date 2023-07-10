import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-5.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion is energy!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="text-3xl font-bold uppercase text-dark/75 pb-12 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium ">
                Hi, I am <span className="font-semibold">Saksham Mishra</span>,
                a web developer with a passion for creating beautiful,
                functional, and user-centered digital experiences. I am always
                looking for new and innovative ways to bring ideas into codes.
              </p>
              <p className="font-medium my-8 ">
                I believe that design is about more than just making things look
                pretty – its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium mb-8 ">
                My primary focus is on building Front End Web Applications. I
                love building dynamic, responsive and interactive web
                applications. On the Frontend side, I code in JavaScript, CSS3,
                and HTML5 together with frameworks like React JS, Bootstrap. On
                the Backend side, I work with Node Js, Express Js, and MongoDB.
                I also explored Blockchain technologies and am currently working
                on applying the concepts in projects.
              </p>
              <p className="font-medium "></p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 
            border-solid border-dark bg-light p-8 dark:bg-dark 
            dark:border-light md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Saksham"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
