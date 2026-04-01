```jsx
import React from "react";
import { Sparkle } from "./ui/Sparkle";
import { myTechStack } from "@/data";
import Reveal from "./ui/Reveal";

const About = () => {
  // Stable sparkle duration (no random re-render issue)
  const sparkleDuration = 12000;

  return (
    <section id="about" className="py-20 w-full space-y-10">
      {/* Heading */}
      <Reveal>
        <h3 className="mb-10 text-3xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            me.
          </span>
        </h3>
      </Reveal>

      {/* Main Layout */}
      <div className="grid sm:grid-cols-[2fr_1fr] gap-6">
        {/* About Content */}
        <Sparkle
          duration={sparkleDuration}
          className="flex flex-col text-left p-5 md:p-7 lg:p-10 gap-5 min-h-full rounded-3xl border border-white/[0.1] shadow-input"
        >
          <p>
            Hey! I&apos;m <strong>Yuvi Goyal</strong>, a passionate Software Developer
            specializing in AI-powered applications and modern web technologies.
          </p>

          <p>
            I focus on building intelligent, scalable, and user-centric solutions
            that solve real-world problems — from fraud detection systems to
            smart automation tools. I enjoy turning complex ideas into practical,
            high-impact products.
          </p>

          <p>
            Constantly learning and exploring new technologies, I aim to create
            innovative digital experiences that combine performance, design, and
            intelligence. Let’s build something meaningful together.
          </p>
        </Sparkle>

        {/* Tech Stack */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 shadow-input flex flex-col space-y-4 p-6 md:p-8">
          <p className="text-xl lg:text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              My Tech Stack!
            </span>
          </p>

          <div className="flex flex-wrap gap-3 py-4">
            {myTechStack.map((skill) => (
              <div
                key={skill}
                className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```
