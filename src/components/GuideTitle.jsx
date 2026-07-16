import React from "react";

const GuideTitle = ({number, text}) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <h2 className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
          {number}
        </h2>
        <p className="text-white text-xl">{text}</p>
      </div>
    </>
  );
};

export default GuideTitle;
