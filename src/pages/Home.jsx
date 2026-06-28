import React from "react";
import Title from "../components/Title";
import profile from "../assets/profile.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

const stats = [
  { value: "10+", label: "Technologies" },
  { value: "06+", label: "Projects" },
  { value: "4+", label: "Degrees" },
  { value: "100+", label: "Passion" },
];

const Home = () => {
  useGSAP(() => {
    gsap.from("#heroText", {
      x: -400,
      duration: 1,
    });

    gsap.from("#heroCart", {
      x: 500,
      duration: 1,
    });
  }, []);

  return (
    <div className="w-full bg-bg overflow-hidden">
      <div className="flex justify-between items-center gap-6 max-w-7xl mx-auto">
        
        {/* Hero Text */}
        <div id="heroText" className="mb-20">
          <Title
            subtitle={"who I am"}
            title1={"Hi, I'm"}
            title2={"Piyal"}
            title3={"Hasan"}
            para={
              "A passionate Frontend Developer from Bangladesh, building fast, beautiful, and interactive web experiences with modern tools."
            }
          />
          <div id="hireBtn" className="mt-20 flex gap-6">
            <Button
              sx={{ color: "#88ce02", borderColor: "#88ce02" }}
              variant="outlined"
            >
              ⚡View More
              <FaArrowRightLong className="ml-3" />
            </Button>
            <Button
              sx={{ color: "#88ce02", borderColor: "#88ce02" }}
              variant="outlined"
            >
              😊 Hire Me
              <FaArrowRightLong className="ml-3" />
            </Button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="my-11">
          <div
            id="heroCart"
            className="min-w-120 flex flex-col justify-center items-center gap-4 bg-surface p-10 border-2 border-border shadow rounded-sm"
          >
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={profile}
                alt="Piyal Hasan"
              />
            </div>

            {/* Name & Title */}
            <div className="flex flex-col items-center justify-center gap-2 my-2">
              <h4 className="font-inter font-bold text-2xl text-text">
                Piyal Hasan
              </h4>
              <p className="font-firaCode font-normal text-sm text-accent">
                // frontend.developer
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="w-40 h-24 flex flex-col justify-center items-center bg-surface2 border border-border text-center"
                >
                  <h4 className="font-firaCode font-bold text-3xl text-accent">
                    {stat.value}
                  </h4>
                  <p className="font-inter font-normal text-xs text-text/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
