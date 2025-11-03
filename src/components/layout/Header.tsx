import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">About / Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
