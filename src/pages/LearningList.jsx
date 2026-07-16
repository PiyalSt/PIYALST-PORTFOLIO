import React from "react";
import { Link } from "react-router";

const LearningList = () => {
  return (
    <>
      <div className="h-[89vh] py-6 lg:py-12 bg-bg border-t border-surface2">
        <div className="max-w-7xl mx-auto lg:py-12 px-4 pb-12 flex flex-col gap-6 lg:gap-8 items-start">
          <h1 className="text-3xl lg:text-4xl font-inter font-bold text-text">
            Learning List
          </h1>ui

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-surface2 rounded-md border border-surface2/50 hover:border-accent transition-colors duration-400 cursor-pointer group">
              <p className="text-white text-center group-hover:scale-105 transition-transform duration-400">
                HTML & CSS
              </p>
            </div>
            <div className="p-4 bg-surface2 rounded-md border border-surface2/50 hover:border-accent transition-colors duration-400 cursor-pointer group">
              <p className="text-white text-center group-hover:scale-105 transition-transform duration-400">
                JavaScript
              </p>
            </div>

            <Link to="/react">
              <div className="p-4 bg-surface2 rounded-md border border-surface2/50 hover:border-accent transition-colors duration-400 cursor-pointer group">
                <p className="text-white text-center group-hover:scale-105 transition-transform duration-400">
                  React js
                </p>
              </div>
            </Link>
            <div className="p-4 bg-surface2 rounded-md border border-surface2/50 hover:border-accent transition-colors duration-400 cursor-pointer group">
              <p className="text-white text-center group-hover:scale-105 transition-transform duration-400">
                React js
              </p>
            </div>
            <div className="p-4 bg-surface2 rounded-md border border-surface2/50 hover:border-accent transition-colors duration-400 cursor-pointer group">
              <p className="text-white text-center group-hover:scale-105 transition-transform duration-400">
                Next js
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningList;
