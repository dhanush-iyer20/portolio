/* eslint-disable no-unused-vars */
import React from "react";
import mainimg from "../assets/mainimg.png";
import Resume from "../assets/Resume Dhanush Iyer.pdf";
import Typed from 'typed.js';
const Intro = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FINANCE', 'TECH', 'STARTUPS', 'WRITING', 'VENTURE CAPITAL'],
      typeSpeed: 150,
      loop:true,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="ml-5 mt-10 pt-0 max-w-[80%] ">
      <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 sm:mt-[5rem] mt-[8rem]">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 animated fadeInUp">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={mainimg}
                className="absolute image-intro inset-0 h-full w-full object-contain mb-5"
              />
            </div>
          </div>

          <div className="relative flex sm:items-left items-center p-0 bg-transparent">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-transparent"></span>

            <div className="p-8 pb-0 sm:p-16 lg:p-24 sm:items-left items-center ">
            <div className="sm:flex flex-none">
    <h2 className="text-3xl text-white font-bold sm:text-3xl">
        I&nbsp;&nbsp;LOVE &nbsp;  
    </h2>
    <h2 ref={el} className="text-3xl text-[#836FFF] font-bold sm:text-3xl min-h-[3rem]">
    </h2>
</div>

              <p className="mt-4 text-gray-500 mt-[-1rem] sm:mt-[0rem]">
                As a 19-year-old student hailing from the vibrant city of
                Mumbai, I bring an insatiable drive and unbridled enthusiasm to
                my pursuits. My work ethic is unwavering, and I take great pride
                in mastering the art of time management and discipline. With
                every endeavor, I am passionately working towards building a
                legacy that reflects my commitment and dedication.
              </p>

              <a
                className="mt-8 inline-block rounded px-12 py-3 text-sm font-medium text-white background-button border border-black"
                href={Resume}
                download="Dhanush Iyer Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;


