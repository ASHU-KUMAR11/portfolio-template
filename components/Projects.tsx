
"use client";

import { projects } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-24 w-full space-y-10">
      {/* Heading */}
      <Reveal>
        <h3 className="text-3xl md:text-4xl font-bold text-center">
          Recent{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            Projects.
          </span>
        </h3>
      </Reveal>

      {/* Subheading (NEW - makes it look premium) */}
      <Reveal>
        <p className="text-center text-white/70 max-w-2xl mx-auto">
          A collection of my work focused on AI-powered solutions,
          modern web apps, and real-world problem solving.
        </p>
      </Reveal>

      {/* Projects Grid */}
      <BentoGrid className="w-full py-10">
        {projects.map((item) => (
          <BentoGridItem
            key={item.id}
            {...item}
            className="hover:scale-[1.02] transition duration-300 ease-in-out"
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;
