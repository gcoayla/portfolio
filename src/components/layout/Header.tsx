import React from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button>
              <a href="#hero">Home</a>
            </Button>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">About / Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
