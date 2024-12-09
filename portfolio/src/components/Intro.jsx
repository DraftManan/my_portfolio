import React from "react";

const Button = ({ text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 text-white bg-black rounded-lg text-sm sm:text-base"
  >
    {text}
  </a>
);

const Intro = () => {
  return (
    <><div className="h-[50px]"></div><section
      id="home"
      className="relative z-20 w-full max-w-4xl mx-auto mt-12 px-5 sm:px-7 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col items-center md:flex-row">
        {/* Text Content */}
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          <h3 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight md:text-4xl lg:text-6xl">
            Hello, I'm Mananchaya.
          </h3>
          <p className="mb-4 text-sm sm:text-base text-neutral-600">
            I am a third-year IT student at King Mongkut's Institute of Technology Ladkrabang (KMITL){" "}
            <br className="hidden lg:block" />
          </p>
          <p className="mb-2 font-semibold text-neutral-800">I can help you out with:</p>
          <ul className="py-2 space-y-[3px] text-sm sm:text-base list-disc list-inside text-neutral-500">
            <li>Website Development</li>
            <li>Fullstack Development</li>
          </ul>
          <Button text="View Github" link="https://github.com/DraftManan" />
        </div>

        {/* Image Content */}
        <div className="relative w-full mt-10 md:mt-0 md:flex md:pl-10 md:w-1/2">
          <div className="relative w-full">
            <div className="relative px-6">
              <img
                src="/images/photo.png"
                alt="Mananchaya"
                loading="eager"
                decoding="auto"
                className="mx-auto w-2/3 sm:w-1/2 md:w-full max-w-xs aspect-[590/1100] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="relative my-20 sm:my-32">
        <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950"></div>
          <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
        </div>
        <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
          <p className="leading-none">Check out my skill</p>
          <div className="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Intro;
