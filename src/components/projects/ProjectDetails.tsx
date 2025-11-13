import { Typography } from "@/components/ui/Typography";
import { TechnologyIcon } from "@/components/ui/TechnologyIcon";
import React from "react";

interface Project {
    title: string;
    description: React.ReactNode;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectDetailsProps {
    project: Project;
}


export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <header className="mb-6 text-center">
                <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-2">
                    {project.title}
                </Typography>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-64 sm:h-80 md:h-96 bg-muted rounded-lg flex items-center justify-center">
                    <Typography variant="p" className="text-muted-foreground">
                        Image Placeholder
                    </Typography>
                </div>
                <div className="flex flex-col space-y-6">
                    <div>
                        <Typography variant="h3" className="text-2xl font-semibold border-b pb-2 mb-4">
                            Description
                        </Typography>
                        <div className="text-muted-foreground space-y-4">
                            {project.description}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h3" className="text-2xl font-semibold border-b pb-2 mb-4">
                            Technologies
                        </Typography>
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((tech) => (
                                <div key={tech} className="flex flex-col items-center gap-2">
                                    <TechnologyIcon name={tech} size="medium" />
                                    <Typography variant="span">{tech}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
