import React from "react";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Skill from "../components/skill";
import Footer from "../components/footer";

const Home = () => {
  return (
      <div className="bg-white text-neutral-900 min-h-screen">
        <Intro />
        <Skill />
        <Projects />
        <Footer />
      </div>
  );
};

export default Home;
