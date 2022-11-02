import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Resume from "../assets/Picture/Le-Thien-An-Tran-Resume-General.pdf";
const Home = () => {
  return (
    <div name="home" className="w-full md:h-screen h-full">
      <div className="max-w-[1000px] my-auto pl-20 pr-20 text-center md:px-20 sm:text-left flex flex-col justify-center h-full z-0">
        <p className="text-red-500 sm:text-xl md:text-2xl py-4 ">
          Hello there, my name is{" "}
        </p>

        <h1 className=" text-4xl sm:text-5xl md:text-7xl font-bold text-white ">
          Le Thien An Tran
        </h1>
        <h2 className="text-[#d9b99b] font-bold text-xl sm:text-2xl md:text-4xl py-4">
          Junior Computer Science | Unity Game Developer
        </h2>
        <p className="text-[#565656] max-w-[700px] text-lg md:text-2xl py-4">
          I am a student at Seattle Pacific University. Currently, I am focused
          on studying building responsive web-app, developing my game "Down The
          Caslte - 2D RPG" and looking for SDE internships.
        </p>
        <ul className="flex py-4 px-0 ml-0">
          <li>
            <a
              href="https://www.linkedin.com/in/le-thien-an-tran/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white text-3xl md:text-4xl inline mb-1 hover:text-blue-700" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lethienantran"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-white text-3xl md:text-4xl inline mb-1 hover:text-blue-400" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lethienantran"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-white text-3xl md:text-4xl inline mb-1 hover:text-gray-500" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/wildemakegames"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-white text-3xl md:text-4xl inline mb-1 hover:text-pink-400" />
            </a>
          </li>
          <li>
            <a
              href={Resume}
              download={Resume}
              className="text-lg md:text-2xl bg-black text-white px-2 py-1 border-solid border-2 border-white hover:bg-white hover:text-black"
            >
              <button type="submit"> Resume</button>
            </a>
          </li>
        </ul>
        {/* <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            More Information <HiArrowNarrowRight className="ml-3" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
