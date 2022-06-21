import React from "react";
import "../../styles/pages/Projects.styles.css";
import ProjectCard from "../cards/ProjectCard";

const Projects = ({  }) => {

    const projects = [
        {
            name: "github-users",
            tech: [{ src: "assets/react.svg" }, { src: "assets/css.svg" }],
            message: "React application that displays github users information",
            repository: "https://github.com/asrato/github-users",
            doubled: true
        },
        {
            name: "neon-clock",
            tech: [{ src: "assets/html.svg" }, { src: "assets/css.svg" }, { src: "assets/js.svg" }],
            message: "HTML + Javascript  + CSS neon clock implementation",
            repository: "https://github.com/asrato/neon-clock",
            doubled: true
        },
        {
            name: "website",
            tech: [{ src: "assets/react.svg" }, { src: "assets/css.svg" }],
            message: "React application source code for my website",
            repository: "https://github.com/asrato/website",
            doubled: true
        },
    ];

    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-cards">
                {projects.map(project => <ProjectCard key={project.name} info={project} doubleSided={project.doubled} />)}
            </div>
        </div>
    );
};

export default Projects;