import React from 'react';
import { ProjectCard } from './ProjectCard';

interface ProjectProps {
  children: React.ReactNode;
}

export const Project = ({ children }: ProjectProps) => {
  return (
    <div className="w-full h-screen p-4">
      <ProjectCard>{children}</ProjectCard>
    </div>
  );
};
