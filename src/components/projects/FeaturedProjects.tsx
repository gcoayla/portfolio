import React from "react";
import { Project } from "./Project/Project";
import { Typography } from "../ui/Typography";
import { Skullcandy } from "./Skullcandy";

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="flex flex-col gap-4 bg-rich-black-3">
      <Typography variant="h1" className="text-white p-10 md:p-20">
        My Work
      </Typography>
      <Project>
        <Skullcandy />
      </Project>
      <Project>
        <Typography variant="h3">Project 2</Typography>
        <Typography variant="p">This is the second project.</Typography>
      </Project>
      <Project>
        <Typography variant="h3">Project 3</Typography>
        <Typography variant="p">This is the third project.</Typography>
      </Project>
    </section>
  );
};
