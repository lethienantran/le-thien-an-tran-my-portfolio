import React from "react";
import MenuManagementServiceSystem from "../assets/Picture/Projects/MenuManagementServiceSystem.png";
import TicTacToe from "../assets/Picture/Projects/TicTacToeOOP.png";
import DownTheCastle from "../assets/Picture/Projects/DownTheCastle.png";
import AlgorithmPracticeSystem from "../assets/Picture/Projects/AlgorithmPracticeSystem.png";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full lg:h-screen text-gray-300 my-auto pt-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mx-auto text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-400">
            My Projects
          </p>
          <p className="py-6 text-left">
            Here is some of my recent project at University and outside school.
            You can view the program description through GitHub readme of each
            project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Card Items */}
          <div>
            <div
              style={{
                backgroundImage: `url(${DownTheCastle})`,
              }}
              className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-medium text-white tracking-wider ">
                  Down The Castle - 2D RPG
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/lethienantran/Down-The-Castle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      GitHub Available <FaGithub className="inline" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-white pt-4 font-sans">
              {" "}
              <strong className="text-red-400 text-center">
                Current Project{" "}
              </strong>
              <br></br>Down The Castle - 2D RPG (Unity Game Engine)
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${MenuManagementServiceSystem})`,
              }}
              className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-medium text-white tracking-wider ">
                  Menu Management Service System
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://devpost.com/software/online-menu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      DubHacks'22 Presentation
                    </button>
                  </a>
                  <a
                    href="https://github.com/lethienantran/MenuManagementService"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      GitHub Available <FaGithub className="inline" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-white pt-4 font-sans">
              {" "}
              <strong className="text-red-400 text-center">
                DubHacks'22 - Hackathon{" "}
              </strong>
              <br></br>Menu Management Service System (C#, ASP.NET, SQL Server)
            </p>
          </div>

          <div>
            <div
              style={{
                backgroundImage: `url(${TicTacToe})`,
              }}
              className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-medium text-white tracking-wider ">
                  Tic Tac Toe
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/lethienantran/OOP-TicTacToe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      GitHub Available <FaGithub className="inline" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-white pt-4 font-sans">
              {" "}
              Tic Tac Toe (C#)
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${AlgorithmPracticeSystem})`,
              }}
              className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-medium text-white tracking-wider text-center">
                  Daily Checklist
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://dailychecklist-lethienantran.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      Run the app!
                    </button>
                  </a>
                  <a
                    href="https://github.com/lethienantran/daily-checklist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-mono hover:bg-red-700 hover:text-white">
                      GitHub Available <FaGithub className="inline" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-white pt-4 font-sans">
              {" "}
              Daily Checklist (React.js)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
