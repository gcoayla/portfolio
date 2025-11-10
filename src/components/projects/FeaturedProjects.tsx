import React from 'react';
import { Project } from './Project/Project';
import { Typography } from '../ui/Typography';

export const FeaturedProjects = () => {
  return (
    <section id="projects">
      <Project>
        <Typography variant="h3" className="mb-4">Project 1</Typography>
        <Typography variant="p">This is the first project.</Typography>
      </Project>
      <Project>
        <Typography variant="h3" className="mb-4">Project 2</Typography>
        <Typography variant="p">This is the second project.</Typography>
      </Project>
      <Project>
        <Typography variant="h3" className="mb-4">Project 3</Typography>
        <Typography variant="p">This is the third project.</Typography>
      </Project>
    </section>
  );
};
