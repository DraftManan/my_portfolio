import React from "react";

const projects = [
  {
    name: "MyKmitl Planner",
    description: "Web application developed to manage planners and activities within the university. It uses HTML, CSS, and Tailwind CSS for the frontend, Django for the backend, and PostgreSQL as the database.",
    image: "/work/mykmitl.png",
    url: "https://example.com/project1",
  },
  {
    name: "Teammusic",
    description: "Web application developed for music streaming, leveraging AWS technologies such as Amazon S3 for storage, Amazon CloudFront for content delivery, and AWS Lambda for serverless computing.",
    image: "/work/teammusic.png",
    url: "https://example.com/project2",
  },
  {
    name: "WellCareConnect",
    description: "Designed to help elderly individuals access healthcare benefits easily, the platform uses HTML, CSS, Tailwind, Django, and PostgreSQL. The CI/CD pipeline automates deployment with GitHub, Google Cloud, Jenkins, Docker, and integrates APIs like Infermedica and Dialogflow.",
    image: "/work/wellcare.png",
    url: "https://example.com/project3",
  },
  {
    name: "Ohyummy",
    description: "Designed and developed a restaurant management website using HTML, CSS, Bootstrap, PHP, and MySQL.",
    image: "/work/ohyummy.png",
    url: "https://example.com/project1",
  },
  {
    name: "Knownow",
    description: "Developed a Java-based software using OOP principles. The software serves as a platform for online learning and teaching.",
    image: "/work/knownow.png",
    url: "https://example.com/project2",
  },
  {
    name: "Measure-Height",
    description: "Developed a Python-based project using OpenCV to measure individuals' heights along the x and y axes.",
    image: "/work/Measure-Height.png",
    url: "https://example.com/project3",
  },
];

const ProjectCard = ({ project }) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg p-4 hover:shadow-lg transition"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-50 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-sm text-neutral-600">{project.description}</p>
    </a>
  );
  
  const Projects = () => {
    return (
      <section id="projects" className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-sm sm:text-base text-neutral-600 mb-6 text-center">
          These are my projects from my first year in university up to the present.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  