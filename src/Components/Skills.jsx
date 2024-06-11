/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import AdobeLogo from "../assets/Photos/Adobe Logo.png";

const skills = [
  {
    name: "Excel",
    desc: "Excellent in Excel as well as Google Spreadsheets - over 1 year of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/2170px-Microsoft_Excel_2013-2019_logo.svg.png",
  },
  {
    name: "PPTs",
    desc: "Proficient in Powerpoint, Google Sheets and also canva presentations - over 1 year of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png",
  },
  {
    name: "Data visualizations",
    desc: "Proficient in Tablue and powerBI in creating interactive visualizations - over 5 months of experience",
    img: "https://assets-global.website-files.com/59e16042ec229e00016d3a66/613157f891f7741dd99a68b2_data%20visualization%20tips_blog%20listing.jpg",
  },
  {
    name: "Canva",
    desc: "Proficient in creating PPTs, Invites, Posters - over 1 year of experience",
    img: "https://play-lh.googleusercontent.com/3aWGqSf3T_p3F6wc8FFvcZcnjWlxpZdNaqFVEvPwQ1gTOPkVoZwq6cYvfK9eCkwCXbRY",
  },
  {
    name: "Soft Skills",
    desc: "Leadership, Presentations, Event Management, Strategic Teamwork, Public Speaking, Time Management",
    img: "https://www.pngitem.com/pimgs/m/499-4996855_thumb-image-good-communication-skills-icon-hd-png.png",
  },
  {
    name: "Languages",
    desc: "Professional in English, Hindi, Marathi. Intermediate in Malayalam, Tamil",
    img: "https://cdn-icons-png.flaticon.com/512/3269/3269817.png",
  },
  {
    name: "Adobe",
    desc: "Proficient in Premiere pro, Illustrator, Photoshop - over 1 year of experience in photoshop",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/800px-Adobe_Acrobat_DC_logo_2020.svg.png",
  },
  {
    name: "Figma",
    desc: "Proficient in making wireframs, User flow diagrams - over 6 months of experience",
    img: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
  },
  {
    name: "Blender",
    desc: "Proficient in making 3d models, Animations - over 3 months of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
  },
  {
    name: "FL studio - Music production",
    desc: "Over 30,000 streams on my music on Spotify. Proficient in Mixing, Mastering, Composition.",
    img: "https://www.pngfind.com/pngs/m/4-49885_fl-studio-logo-png-transparent-png.png",
  },
];

const Skills = () => {
  return (
    <>
      <div className="m-8 ml-10 mr-10 mb-[6rem] max-w-[80%]">
        <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-4">
          My Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {skills.map((item) => {
            return (
              <div className="flex items-start gap-4 m-6">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <img className="h-10 w-10 rounded-lg" src={item.img} />
                </span>

                <div>
                  <h2 className="text-lg font-bold text-white">{item.name}</h2>

                  <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
