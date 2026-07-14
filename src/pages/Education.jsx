import React from "react";
import Title from "../components/Title";
import { education } from "../assets/assets";
import { MdLocationOn } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";

const Education = () => {
  return (
    <div className="py-6 lg:py-12 bg-bg">
      <div className="max-w-7xl mx-auto lg:my-12 px-4 pb-12">
        <Title
          subtitle={"my journey"}
          title1={"My"}
          title2={"Education"}
          para={"The academic path that shaped my thinking and skills."}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-12 border border-surface2">
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-surface2" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-10">
            {education.map((item, index) => (
              <div key={index} className="relative flex gap-8">

                {/* Dot */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
                  <PiGraduationCapBold className="text-accent text-xl" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-surface border border-surface2 rounded-md p-6 hover:border-accent transition-all duration-300 mb-2">

                  {/* Year Badge */}
                  <span className="text-xs font-firaCode text-accent bg-surface2 border border-border px-3 py-1 rounded">
                    {item.year}
                  </span>

                  {/* Degree */}
                  <h4 className="font-inter font-bold text-lg text-text mt-3">
                    {item.degree}
                  </h4>

                  {/* Institution */}
                  <p className="font-inter font-medium text-base text-accent4 mt-1">
                    {item.institution}
                  </p>

                  {/* Location & GPA */}
                  <div className="flex items-center gap-6 mt-3">
                    <div className="flex items-center gap-1 text-sm text-text/50">
                      <MdLocationOn className="text-base" />
                      {item.location}
                    </div>
                    <div className="text-sm text-text/50 font-firaCode">
                      GPA: <span className="text-accent">{item.gpa}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;