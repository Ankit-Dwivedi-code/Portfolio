"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : (
            <ul className="list-disc pl-2">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDb</li>
                <li>Node.js</li>
                <li>Nextjs</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul className="list-disc pl-2">
                <li>Bachelor of Science in Information Technology</li>
                <li>College of commerce arts and science</li>
                <li>Patliputra University, Patna, Bihar</li>
            </ul>
        )
    },
    {
        title : "Languages",
        id : "languages",
        content : (
            <ul className="list-disc pl-2">
                <li>Hindi</li>
                <li>English</li>
            </ul>
        )
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/cat-code.jpg" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Web Developer with a passion for creating and
            developing interactive and responsive web applications. I am working
            with MERN stack and NextJs.My passion for clean code and continuous learning
            drives me to create impactful digital solutions.I'm excited to
            contribute my skills to impactful projects and to continue growing
            as a developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="m-8">
            {TAB_DATA.find((t)=> t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
