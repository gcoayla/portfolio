import React from 'react';

interface ProjectCardProps {
  children: React.ReactNode;
}

export const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg p-8 border-2 border-gray-300">
      {children}
    </div>
  );
};
