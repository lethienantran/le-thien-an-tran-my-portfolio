import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] my-auto px-20 flex flex-col justify-center h-full mx-auto">
        <h1 className="text-red-500 text-4xl md:text-7xl font-bold py-4 text-center">
          Contact Me
        </h1>
        <h3 className="mx-auto pb-4 text-3xl md:text-4xl">
          lethienantran@gmail.com
        </h3>
        <ul className="mx-auto flex py-4">
          <li>
            <a
              href="https://www.linkedin.com/in/le-thien-an-tran/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white text-4xl inline mb-1 hover:text-blue-700" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lethienantran"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-white text-4xl inline mb-1 hover:text-blue-400" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lethienantran"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-white text-4xl inline mb-1 hover:text-gray-500" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/wildemakegames"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-white text-4xl inline mb-1 hover:text-pink-400" />
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

export default Contact;
