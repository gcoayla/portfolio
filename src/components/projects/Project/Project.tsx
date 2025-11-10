import React from "react";
import { ProjectContainer } from "./ProjectContainer";

interface ProjectProps {
  children: React.ReactNode;
}

export const Project = ({ children }: ProjectProps) => {
  return (
    <div className="w-full h-screen p-4">
      <ProjectContainer>{children}</ProjectContainer>
    </div>
  );
};
