import React from "react";
import myProfile from "../assets/Picture/myProfile.jpg";
const About = () => {
  return (
    <div name="about" className="w-full md:h-screen  text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-400">
              {" "}
              About Me
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
          <div className="text-left font-bold ">
            <img
              src={myProfile}
              alt="profilePic"
              className="w-1/2 mx-auto md:w-full"
            />
          </div>
          <div>
            <p className="px-4 font-light">
              I am an avid Computer Science student pursuing Bachelor of Science
              of Computer Science at Seattle Pacific University. My goal this
              year is{" "}
              <strong className="text-red-400">
                {" "}
                getting a SDE Summer 2023 Internship{" "}
              </strong>{" "}
              in order to gain more experience in the industry. I am always open
              to explore new opportunities.
              <br></br> <br></br>I have the passion in becoming a Software and
              Game Developer since 11th grade when I first encountered a
              programming competition. I love spending time on learning new
              technology and playing around with it. My goal in the next 5 years
              is to become an excellent back-end developer who strong at: &nbsp;
              <strong className="text-red-400">
                PHP, Ruby, Java, NodeJS, ASP.NET, Python and database
                (especially RDBMS)
              </strong>
              <br></br>
              <br></br>I have a twin brother who is also studying Computer
              Science. We develop games together with Unity Game Engine during
              our freetime. My current game project is{" "}
              <strong className="text-red-400">Down The Castle - 2D RPG</strong>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
