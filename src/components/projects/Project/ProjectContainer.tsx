import React from "react";

interface ProjectCardProps {
  children: React.ReactNode;
}

export const ProjectContainer = ({ children }: ProjectCardProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center rounded-lg p-2 lg:p-8">
      {children}
    </div>
  );
};
