import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import assets, { navLinks } from "../assets/assets";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const handleShowBars = () => {
    setShowNav(false);
  };
  const handleShowClose = () => {
    setShowNav(true);
  };

  return (
    <nav className="w-full bg-bg relative">
      <div className="max-w-7xl mx-auto py-5 px-4 flex justify-between items-center">
        {/* Logo */}
        <code>
          <h4 id="logo" className="font-bold text-2xl text-white">
            PIYAL<span className="text-accent">ST.</span>DEV
          </h4>
        </code>

        {/* Menu */}
        <ul className="hidden lg:flex gap-6 list-none text-text-muted">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `border-b-2 flex items-center px-3 py-2 transition-all duration-300 cursor-pointer font-inter font-medium text-base ${
                  isActive
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        {/* Hire Button */}
        <div className="hidden lg:inline">
          <Button
            sx={{ color: "#88ce02", borderColor: "#88ce02" }}
            variant="outlined"
          >
            😊 Hire Me
            <FaArrowRightLong className="ml-3" />
          </Button>
        </div>
      </div>
      {showNav ? (
        // {/* menu bars */}
        <div className="lg:hidden absolute top-5 right-4">
          <CgMenuRight
            onClick={handleShowBars}
            className="text-white text-3xl cursor-pointer hover:text-accent duration-300"
          />
        </div>
      ) : (
        <div className="w-full h-200 bg-black/50 backdrop-blur-lg absolute top-0 z-20">
          <div className="w-full flex justify-end pr-6 pt-6">
            <IoMdClose
              onClick={handleShowClose}
              className="text-white text-3xl cursor-pointer hover:text-accent duration-300"
            />
          </div>
          <div>
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  to={to}
                  key={to}
                  className={({ isActive }) =>
                    `border-b-2 flex items-center justify-center px-3 py-2 transition-all duration-300 cursor-pointer font-inter font-medium text-base text-white ${
                      isActive
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
