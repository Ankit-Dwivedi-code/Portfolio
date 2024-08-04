"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
      id: 1,
      title: "NextJs Link Generator",
      description: "A Next.js application where users can register, upload images, and receive shareable URLs from Cloudinary. This app simplifies the process of managing and sharing images with secure and efficient handling of user data",
      image: "/images/projects/1.png",
      tag: ["All", "Nextjs"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/link-generator",
      previewUrl: "https://upload-file-get-link.netlify.app/",
    },
    {
      id: 2,
      title: "React NewsHub",
      description: "A dynamic React application that aggregates and displays the latest news from various sources. With an intuitive interface and real-time updates, NewsHub keeps you informed with breaking news, trending stories, and comprehensive coverage across multiple categories.",
      image: "/images/projects/2.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/news-app",
      previewUrl: "https://react-news-app-free.netlify.app/",
    },
    {
      id: 3,
      title: "React TextUtils",
      description: "Provides a suite of text manipulation tools, including counting words and characters, converting text to uppercase or lowercase, and more. This user-friendly app",
      image: "/images/projects/3.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/TextUtils",
      previewUrl: "https://free-text-analyzer-app.netlify.app/",
    },
    {
      id: 4,
      title: "React QR code Generator",
      description: "Simply enter your text, and the app instantly creates a scannable QR code",
      image: "/images/projects/4.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/react-qrcode",
      previewUrl: "https://main--freerandomqrgenerator.netlify.app/",
    },
    {
      id: 5,
      title: "React Random Color Code Generator",
      description: " A fun and interactive React application that generates random color codes in both HEX and RGB formats.",
      image: "/images/projects/5.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/React-RandomColorGenerator",
      previewUrl: "https://random-color-generator-hexandrgb.netlify.app/",
    },
    {
      id: 6,
      title: "React LockBox",
      description: "A secure React application that allows users to store and manage their passwords and sensitive information",
      image: "/images/projects/6.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Ankit-Dwivedi-code/LockBox-PasswordManager",
      previewUrl: "https://lockbox-localstiorage-version.netlify.app/",
    },
  ];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="React"
        isSelected={tag === "React"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Nextjs"
        isSelected={tag === "Nextjs"}
      />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default ProjectsSection
