import React from "react";
import { ProjectContainer } from "./ProjectContainer";

interface ProjectProps {
  children: React.ReactNode;
}

export const Project = ({ children }: ProjectProps) => {
  return (
    <div className="relative w-full min-h-screen p-4 max-w-[2532px]">
      <ProjectContainer>{children}</ProjectContainer>
    </div>
  );
};
