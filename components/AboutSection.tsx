import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "PHP" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Tailwind CSS" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jacky and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Vancouver, BC.
            </p>
            <br />
            <p>
              I completed my studies at Douglas College in 2023, achieving a
              Post-baccalaureate Diploma in Computer & Information Technology.
              Since then, I have been actively engaged in the industry,
              leveraging my education. Furthermore, I hold a BSc in Chemistry
              from the Hong Kong University of Science and Technology.
            </p>
            <br />
            <p>
              I find myself engrossed in various hobbies and interests. These
              include playing sports, traveling, and staying active by engaging
              in activities such as running, going to the gym, and swimming.
              Moreover, I have a strong enthusiasm for learning and consistently
              seeking out new knowledge.
            </p>
            <br />
            <p>
              I hold the belief that{" "}
              <span className="font-bold text-teal-500">
                continuous growth is paramount
              </span>
              , and this principle is what I actively pursue. Fueled by a fervor
              for technology, I am driven to consistently challenge the
              boundaries of what can be achieved. The anticipation of the
              unfolding path of my career fills me with excitement, and I remain
              receptive to fresh prospects and opportunities that may arise. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/greeting.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
