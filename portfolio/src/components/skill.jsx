import React from "react";

const skills = [
  {
    name: "React",
    icon: "/images/React.png",
  },
  {
    name: "HTML",
    icon: "/images/HTML5.png",
  },
  {
    name: "CSS",
    icon: "/images/css.png",
  },
  {
    name: "Tailwind",
    icon: "/images/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "/images/Bootstrap.png",
  },
  {
    name: "Python",
    icon: "/images/Python.png",
  },
  {
    name: "PHP",
    icon: "/images/php.png",
  },
  {
    name: "Django",
    icon: "/images/django.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/Postgresql.png",
  },
  {
    name: "MongoDB",
    icon: "/images/MongoDB.jpg",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.png",
  },
  {
    name: "JavaScript",
    icon: "/images/javascript.png",
  },
  {
    name: "Java",
    icon: "/images/java.png",
  },
  {
    name: "Git",
    icon: "/images/git.png",
  },
  {
    name: "Google Cloud",
    icon: "/images/google.jpg",
  },
  {
    name: "AWS",
    icon: "/images/aws.png",
  },
  {
    name: "Jenkins",
    icon: "/images/images.png",
  },
  {
    name: "Docker",
    icon: "/images/docker.jpg",
  },
];

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center mb-2">
    <img
      src={skill.icon}
      alt={skill.name}
      className="w-12 h-12 mb-2"
    />
    <p className="text-sm font-medium">{skill.name}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <div className="relative my-16">
        <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white dark:from-transparent md:dark:from-transparent"></div>
          <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
        </div>
        <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
          <p className="leading-none">Check out my Projects</p>
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
    </section>
  );
};

export default Skills;
