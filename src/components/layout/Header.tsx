import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="hidden md:flex flex-1">
          <ul className="flex justify-end space-x-4 w-full">
            <li>
              <Button variant="link" asChild>
                <a href="#hero">Home</a>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <a href="#projects">Projects</a>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <a href="#skills">Skills</a>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <a href="#contact">About / Contact</a>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex flex-1 justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <MobileNav setOpen={setOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
