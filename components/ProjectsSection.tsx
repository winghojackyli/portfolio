import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "LuxHub",
    description:
      "LuxHub is a MERN web application designed for buying and selling sneakers, apparel, accessories, and more.",
    image: "/luxhub.png",
    github: "https://github.com/winghojackyli/luxhub",
    link: "https://luxhub.vercel.app",
  },
  {
    name: "Quiz App",
    description:
      "Quiz App, a dynamic Next.js 13 application that takes the quiz experience to the next level!",
    image: "/quiz-app.png",
    github: "https://github.com/winghojackyli/quiz-app",
    link: "https://quiz-app-winghojackyli.vercel.app",
  },
  {
    name: "CarHub",
    description:
      "Car Hub is a Next.js 13 application designed to provide users with detailed information about car models.",
    image: "/carhub.png",
    github: "https://github.com/winghojackyli/car-showcase",
    link: "https://carhub-eta-kohl.vercel.app",
  },
  {
    name: "Real Estate Web App",
    description:
      "Real Estate MERN stack Web App allows users to manage rental listings and user accounts. ",
    image: "/real-estate.png",
    github: "https://github.com/winghojackyli/real-estate-react",
    link: "https://real-estate-react-lime.vercel.app",
  },
  {
    name: "ChatGPT Clone",
    description:
      "With this web app, users can interact with a ChatGPT-based language model to have natural language conversations. ",
    image: "/chat.png",
    github: "https://github.com/winghojackyli/vercel-chatgpt-clone",
    link: "https://vercel-chatgpt-clone.vercel.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
