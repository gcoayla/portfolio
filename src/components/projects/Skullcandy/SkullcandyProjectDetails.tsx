import { ProjectDetails } from "../ProjectDetails";
import { Typography } from "@/components/ui/Typography";
import React from "react";

const project = {
    title: "Skullcandy",
    description: (
        <>
            <Typography variant="p">
                This project was a recreation of the Skullcandy website. The goal was to create a visually appealing and interactive experience for users, showcasing the products in a dynamic and engaging way.
            </Typography>
            <Typography variant="p">
                The project was built using Astro, React, and Tailwind CSS. Framer Motion was used to create the animations and interactions. The project was a great learning experience and allowed me to experiment with new technologies and techniques.
            </Typography>
        </>
    ),
    technologies: ["Astro", "React", "TailwindCSS", "FramerMotion"],
    liveUrl: "#",
    githubUrl: "#",
};

export function SkullcandyProjectDetails() {
    return <ProjectDetails project={project} />;
}
