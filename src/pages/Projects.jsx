import React from "react";
import Title from "../components/Title";
import { projects } from "../assets/assets";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ item }) => (
  <div className="bg-surface border border-surface2 rounded-md overflow-hidden cursor-pointer hover:border-accent transition-all duration-300 hover:scale-[1.02] group">
    
    {/* Image */}
    <div className="w-full h-48 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col gap-3">

      {/* Title & Description */}
      <h4 className="font-inter font-bold text-lg text-text">{item.title}</h4>
      <p className="font-inter font-normal text-sm text-text/60 line-clamp-2">
        {item.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {item.techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-firaCode px-2 py-1 rounded bg-surface2 border border-border text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-text/60 hover:text-accent transition-colors duration-200"
        >
          <FaGithub className="text-base" />
          GitHub
        </a>
        
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-text/60 hover:text-accent transition-colors duration-200"
        >
          <FiExternalLink className="text-base" />
          Live Demo
        </a>
      </div>

    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="py-6 lg:py-12 bg-bg">
      <div className="max-w-7xl mx-auto lg:my-12 px-4 pb-12">
        <Title
          subtitle={"what I've built"}
          title1={"My"}
          title2={"Projects"}
          para={"A collection of things I've built — real problems, real solutions."}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border border-surface2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;