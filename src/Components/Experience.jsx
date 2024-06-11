/* eslint-disable no-unused-vars */
import React from "react";

const Experience = () => {
  // Array of objects containing information for each card
  const experiences = [
    {
      company: "IgniteXL Ventures",
      position: "VC Deal Sourcing Intern",
      description: [
        "Main Tasks: Used AI tools like Perplexity, Gemini, chatGPT, and Market research and sourced and performed due diligence on over 12 startups."
      ]
    },
    {
      company: "OLE-Solutions",
      position: "Tech Lead Intern",
      description: [
        "Main Tasks: Led two interns and Completed over 80 tasks related to Shopify, Liquid Theme development, DevOps, AWS, Web Frontend and backend, and quality testing.",
        "E-commerce: Complete E-commerce development with Shopify",
        "Technologies: JS, Liquid, Advanced Github and SCSS"
      ]
    },
    {
      company: "CLXNS - Real Estate Solutions",
      position: "Product Research Intern",
      description: [
        "Main Tasks: Working closely with the CMO of the company to research on real estate market in UAE and developing UI/UX solutions for the same."
      ]
    },

  ];

  return (
    <section className="bg-transparent dark:bg-transparent animated fadeInUp max-w-[80%] items-center justify center">
      <h2 className="title mt-[2rem] sm:mt-[1rem] mb-[2rem] sm:mb-[4rem] text-3xl font-bold sm:text-4xl text-white text-center">
        Experience
      </h2>
      <div className=" py-0 px-4 mx-auto max-w-screen-xl lg:py-0 ">
        {/* Map over experiences array to render each card */}
        {experiences.map((experience, index) => (
          <div key={index} className="bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href=""
              className="bg-[#836FFF] cursor-pointer text-[#836FFF] text-xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-[#836FFF] mb-2"
            >
              {experience.company}
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              {experience.position}
            </h1>
            {/* Map over description array for each experience */}
            <div className="text-gray-400 mt-4 mb-4 max-w-[50rem]">
              {experience.description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
