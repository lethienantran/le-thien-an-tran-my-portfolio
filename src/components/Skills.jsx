import React from "react";
import {
  SiUnity,
  SiHtml5,
  SiVisualstudio,
  SiCss3,
  SiJava,
  SiMicrosoftsqlserver,
  SiGithub,
  SiPython,
  SiEclipseide,
  SiReact,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-400 ">
            Skills and Tools
          </p>
          <p className="py-4">Technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiUnity className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">Unity</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiJava className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">Java</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiHtml5 className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">HTML5</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiCss3 className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">CSS</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <p className="my-4 text-7xl pt-2 text-white">C#</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <p className="my-4 text-4xl md:text-4xl pt-6 text-white">ASP.NET</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <p className="my-4 text-7xl pt-2 text-white">C++</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiPython className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">Python</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiVisualstudio className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">Visual Studio</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiReact className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">React</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiTailwindcss className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">Tailwind CSS</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiMicrosoftsqlserver className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">SQL Server</p>
          </div>
          <div className=" shadow-md shadow-gray-600 hover:scale-110 duration-500 bg-gray-900">
            <SiGithub className="text-7xl text-white pt-5 mx-auto border-gray-600" />
            <p className="my-4 text-white">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
