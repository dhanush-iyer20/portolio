/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const projects = [
  {
    name: "Case Studies - Extensive research and presentations",
    features:
      "Netflix business study, German Economy, Dmart Business study, Indian Digital Currency, 30 page industrial visit report",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80",
    link: "https://taplink.cc/dhanushiyer",
  },
  {
    name: "Creating Business Ideas And All Important Strategies",
    features:
      "Created a Mens Cosmetics brand (Click link), Music distribution and creation App, Attended a 30 hour extensive workshop on Design Thinking and made 10 new startup ideas with 5 members",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "https://super-semolina-2ec5d2.netlify.app/",
  },
  {
    name: "Coding  - BlogMan - Multi-user Blogging Website (MERN stack, Tailwind, Figma, Responsive Design",
    features: "Made from scratch, Includes - Jwt AUTH, Search, Like, Comment",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "https://github.com/dhanush-iyer20/blogMan",
  },
  {
    name: "Coding - Event Management Company - Landing page for IIT BHU",
    features: " Participated in IIT BHU competition called startup concur-so",
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    link: "https://oslavaevents.netlify.app/",
  },
];
// Projects.js

// ...

const Projects = () => {
  return (
    <div className="mt-5">
      <h2 className="title text-3xl font-bold sm:text-4xl text-white text-center">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center  px-4 mx-auto max-w-screen-xl ">
        {projects.map((item) => {
          return (
            <div className="mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mr-0 md:mr-10 lg:mr-10">
              <img
                className="rounded-t-lg w-[25rem] sm:h-[10rem] lg:h-[15rem] md:h-[13rem] sm:w-[25rem]"
                src={item.img}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name} {/* Access name prop */}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.features}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check It Out
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
