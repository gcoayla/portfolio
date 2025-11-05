import React from "react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  setOpen: (open: boolean) => void;
}

export const MobileNav = ({ setOpen }: MobileNavProps) => {
  return (
    <nav className="flex flex-col space-y-4">
      <Button variant="ghost" asChild onClick={() => setOpen(false)}>
        <a href="#hero">Home</a>
      </Button>
      <Button variant="ghost" asChild onClick={() => setOpen(false)}>
        <a href="#projects">Projects</a>
      </Button>
      <Button variant="ghost" asChild onClick={() => setOpen(false)}>
        <a href="#skills">Skills</a>
      </Button>
      <Button variant="ghost" asChild onClick={() => setOpen(false)}>
        <a href="#contact">About / Contact</a>
      </Button>
    </nav>
  );
};
