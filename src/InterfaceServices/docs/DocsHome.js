import React from 'react';
import {Link} from "react-router-dom" ;



const DocsHome = () => {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://tailwindtoolbox.github.io/Rainblur-Landing-Page/header.png)",
        }}
        className=" bg-white dark:text-white"
      >
        {/* Header start here */}
        <header className="w-full p-3 border-b dark:border-b  flex">
          <nav className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-row items-start lg:item-center md:item-center sm:item-center lg:justify-between md:justify-between sm:justify-between justify-start dark:text-white">
            <ul>
              {/* You can change your logo name */}
              <li className="font-mono text-xl">Best of the best</li>
            </ul>
            <ul id="header-nav" className="mr-6 sm:flex md:flex lg:flex hidden">
              <li className="mr-5 mb-3 mt-5 sm:mb-0 sm:mt-0 md:mb-0 md:mt-0 lg:mb-0 lg:mt-0">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-5 mb-3 mt-5 sm:mb-0 sm:mt-0 md:mb-0 md:mt-0 lg:mb-0 lg:mt-0">
                <a href="/ser/Docs">Documentation</a>
              </li>
              <li className="mr-5 mb-3 mt-5 sm:mb-0 sm:mt-0 md:mb-0 md:mt-0 lg:mb-0 lg:mt-0">
                <a href="#contributors">Contribution</a>
              </li>
              <div>
                <ul className="flex">
                  {/* Change the href link to your respective social media accounts*/}
                  <li className="mr-5 flex dark:hidden">
                    <p>
                      <img src="./svgs/sun.svg" alt="sun " />
                    </p>
                  </li>
                  <li className="mr-5 hidden dark:flex">
                    <p>
                      <img src="./svgs/sun-dark.svg" alt="sun " />
                    </p>
                  </li>
                  <li className="mr-5 flex dark:hidden">
                    <a href="#Github">
                      <img src="./svgs/github.svg" alt="GitHub " />
                    </a>
                  </li>
                  <li className="mr-5 hidden dark:flex">
                    <a href="#Github">
                      <img src="./svgs/github-dark.svg" alt="GitHub " />
                    </a>
                  </li>
                  <li className="mr-5 flex dark:hidden">
                    <a href="#Twitter">
                      <img src="./svgs/twitter.svg" alt="Twitter " />
                    </a>
                  </li>
                  <li className="mr-5 hidden dark:flex">
                    <a href="#Twitter">
                      <img src="./svgs/twitter-dark.svg" alt="Twitter " />
                    </a>
                  </li>
                  <li className="mr-5 flex dark:hidden">
                    <a href="#Youtube">
                      <img src="./svgs/youtube.svg" alt="YouTube " />
                    </a>
                  </li>
                  <li className="mr-5 hidden dark:flex">
                    <a href="#Youtube">
                      <img src="./svgs/youtube-dark.svg" alt="YouTube " />
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
          <div className="sm:hidden flex" id="open-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden" id="close-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </header>
        {/* Header ends here */}
        {/* Documentation Title and Description start here */}
        <div className="bg-gradient-to-r from-[#0F2027] to-[#2C5364] p-10">
          <div className="w-full items-center flex justify-center flex-col">
            <p className="text-3xl text-white">Documentation</p>
            {/* Change Description as per your information */}
            <p className="font-sans text-white text-center w-[300px] lg:w-[700px] md:w-[700px] sm:w-[600px] mt-4">
              Here your description goes this is the demo documentation for the
              show.
            </p>
          </div>
        </div>
        {/* Document title and description ends here */}
        <div className="w-full flex justify-center p-6 flex-col items-center">
          <p className="p-5 text-xl">Getting started is easy!</p>

          <a
            href="/docs"
            className="text-white h-50 bg-red-600 p-2 w-44 rounded text-center"
          >
            {" "}
            Get Started
          </a>
        </div>
        {/* Documentation Cards starts here */}
        <div className="w-full flex justify-center items-center mt-20 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="max-w-sm rounded shadow bg-white bg-gradient-to-br from-[#302b63] to-[#2c3e50] block -inset-1 -skew-y-3 relative inline-block before:block before:absolute before:-inset-1 before:bg-[#F27121] before:h-2 before:rounded">
              <div className="flex">
                <div className="px-6 py-5">
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base font-medium leading-none text-white flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Introduction
                  </p>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base leading-2 text-gray-300 dark:text-gray-400 pt-2"
                  >
                    Section overview goes here Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Sunt recusandae asperiores
                    ullam? Doloribus dicta nesciunt dolorum necessitatibus!
                    Esse, maxime animi?
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded shadow bg-white bg-gradient-to-br from-[#302b63] to-[#2c3e50] block -inset-1 -skew-y-3 relative inline-block before:block before:absolute before:-inset-1 before:bg-pink-500 before:h-2 before:rounded">
              <div className="flex">
                <div className="px-6 py-5">
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base font-medium leading-none text-white flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Installation
                  </p>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base leading-2 text-gray-300 dark:text-gray-400 pt-2"
                  >
                    Section overview goes here Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Sunt recusandae asperiores
                    ullam? Doloribus dicta nesciunt dolorum necessitatibus!
                    Esse, maxime animi?
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded shadow bg-white bg-gradient-to-br from-[#302b63] to-[#2c3e50] block -inset-1 -skew-y-3 relative inline-block before:block before:absolute before:-inset-1 before:bg-[#F27121] before:h-2 before:rounded">
              <div className="flex">
                <div className="px-6 py-5">
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base font-medium leading-none text-white flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Integration
                  </p>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base leading-2 text-gray-300 dark:text-gray-400 pt-2"
                  >
                    Section overview goes here Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Sunt recusandae asperiores
                    ullam? Doloribus dicta nesciunt dolorum necessitatibus!
                    Esse, maxime animi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Documentation Cards ends here */}
        {/* Contribution section starts here */}
        {/* This is optional as per your wish */}
        {/* You can also change the design */}
        <section id="contributors">
          {/* Replace background image as per your choice */}
          <div className="container mx-auto m-5 bg-gradient-to-r from-[#009FFF] to-[#ec2F4B] rounded-md">
            <div className="flex flex-col justify-center items-center py-12 mx-4 md:mx-6">
              <div className="lg:w-1/2 flex flex-col justify-center items-center mb-10">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white">
                  Meet our contributors
                </h1>
              </div>
              <div
                role="list"
                aria-label="Team members"
                className="grid grid-flow-row md:grid-flow-col gap-10"
              >
                {/* Replace href and src link */}
                <div
                  role="listitem"
                  className="relative flex justify-center items-center"
                >
                  <a href="https://github.com/lmas3009" target="_blank">
                    <div className="relative h-40 bg-white hover:drop-shadow-2xl w-48 flex justify-center rounded-md">
                      <img
                        src="./svgs/github.svg"
                        className="absolute top-16 h-6 w-6"
                        alt="github.img"
                      />
                      {/* add github username under title */}
                      <img
                        src="https://avatars.githubusercontent.com/u/60876387?v=4"
                        className="absolute w-20 h-20 -top-8 rounded-full"
                        alt="display avatar"
                        role="img"
                        title="lmas3009"
                      />
                      {/* Enter your github username */}
                      <p className="absolute top-24 text-center text-black">
                        @lmas3009
                      </p>
                    </div>
                  </a>
                </div>
                {/* Shrikant Dhayje Contribution */}
                <div
                  role="listitem"
                  className="relative flex justify-center items-center"
                >
                  <a href="/" target="_blank">
                    <div className="relative h-40 bg-white hover:drop-shadow-2xl w-48 flex justify-center rounded-md">
                      <img
                        src="./svgs/github.svg"
                        className="absolute top-16 h-6 w-6"
                        alt="github.img"
                      />
                      {/* add github username under title */}
                      <img
                        src="https://avatars.githubusercontent.com/u/35664193?v=4"
                        className="absolute w-20 h-20 -top-8 rounded-full"
                        alt="display avatar"
                        role="img"
                        title="shriekdj"
                      />
                      {/* Enter your github username */}
                      <p className="absolute top-24 text-center text-black">
                        @shriekdj
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contribution section ends here */}
        {/* Footer starts here */}
        <footer>
          <div className="bg-white dark:bg-slate-900 h-38 py-1 px-1 mt-5">
            <div
              tabIndex={0}
              aria-label="footer"
              className="focus:outline-none mx-auto container flex flex-col items-center justify-center"
            >
              <div className="text-black flex flex-col md:items-center f-f-l pt-0">
                <div className="my-6 text-base text-color f-f-l">
                  <ul className="md:flex items-center">
                    <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                      <a
                        to="/docs"
                        className="text-black dark:text-white focus:outline-none focus:underline hover:text-gray-200"
                      >
                        Home
                      </a>
                    </li>
                    <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                      <a
                        to="/docs"
                        className="text-black dark:text-white focus:outline-none focus:underline hover:text-gray-200"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                      <a
                        href="#contributors"
                        className="text-black dark:text-white focus:outline-none focus:underline hover:text-gray-200"
                      >
                        Contribution
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-color mb-10 f-f-l">
                  <p
                    tabIndex={0}
                    className="text-black dark:text-white focus:outline-none"
                  >
                    © 2023 BEST OF THE BEST. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer ends here */}
      </div>
    );
}

export default DocsHome;



function OnclickOpenMenu() {
  document.getElementById("header-nav").style.display = "block";
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("open-menu").style.display = "none";
}

function OnclickCloseMenu() {
  document.getElementById("header-nav").style.display = "none";
  document.getElementById("close-menu").style.display = "none";
  document.getElementById("open-menu").style.display = "block";
}

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

(function () {
  console.log(localStorage.getItem("dark-mode"));
  if (localStorage.getItem("dark-mode") === "On") {
    document.documentElement.classList.add("dark");
  }
})();

function darkmode() {
  localStorage.setItem("dark-mode", "On");
  document.documentElement.classList.add("dark");
}

function lightmode() {
  localStorage.setItem("dark-mode", "Off");
  document.documentElement.classList.remove("dark");
}
