import React from "react";
import Title from "../components/Title";
import { skills } from "../assets/assets";

const sections = [
  { label: "Core Web Technologies", data: skills.core },
  { label: "Frameworks & Libraries", data: skills.frameworks },
  { label: "Tools & Design", data: skills.toolsDesign },
];

const SkillCard = ({ item }) => (
  <div className="w-full h-48 flex flex-col items-center justify-center gap-3 bg-surface rounded-md border border-surface2 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-accent">
    <span className="text-4xl">{item.icon}</span>
    <div className="text-base font-inter font-medium text-text">{item.name}</div>
    <div style={{ color: item.color }} className="text-sm">{item.tag}</div>
  </div>
);

const Skills = () => {
  return (
    <div className="py-6 lg:py-12 bg-bg">
      <div className="max-w-7xl mx-auto lg:my-12 px-4 pb-12">
        <Title
          subtitle={"what I use"}
          title1={"Skills &"}
          title2={"Technologies"}
          para={
            "Every tool in my belt — from markup to motion, framework to figma."
          }
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <div key={i} className="border-t border-surface2 p-12">
            <div className="border-b border-surface2 w-full mb-8">
              <h4 className="font-inter font-medium text-base text-accent4 py-2">
                {section.label}
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {section.data.map((item, index) => (
                <SkillCard key={index} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
