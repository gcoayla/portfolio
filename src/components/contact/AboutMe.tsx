import React from "react";
import { ContactForm } from "./ContactForm";
import { Typography } from "../ui/Typography";

export const AboutMe = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container h-lvh flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 flex flex-col gap-4">
            <Typography variant="h2">About Me</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem in viverra pulvinar, sapien nunc scelerisque erat,
              vel aliquam turpis mauris in est.
            </Typography>
            <Typography variant="p">
              Nulla facilisi. Proin euismod, nisl eu tincidunt aliquam, nunc
              nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
            </Typography>
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
