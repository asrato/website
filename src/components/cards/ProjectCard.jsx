import React from "react";
import "../../styles/cards/ProjectCard.styles.css";

const ProjectCard = ({ info, doubleSided }) => {
    if (doubleSided)
        return (
            <a target={"_blank"} href={info.repository} className="project-card">
                <div className="project-card-inner">
                    <div className="project-card-front">
                        <p className="project-card-name">{info.name}</p>
                        <p className="project-card-message">{info.message}</p>
                        <div className="project-card-spacer"></div>
                        <div className="project-card-tech">
                            {info.tech.map(tech => <img src={tech.src} key={tech.src} />)}
                        </div>
                    </div>
                    <div className="project-card-back">
                        <div className="project-card-back-content">
                        </div>
                    </div>
                </div>
            </a>
        );

    return (
        <div className="project-card-default">
            <div className="project-card-inner">
                <div className="project-card-content">
                    <p className="project-card-name">{info.name}</p>
                    <p className="project-card-message">{info.message}</p>
                    <div className="project-card-spacer"></div>
                    <div className="project-card-tech">
                        {info.tech.map(tech => <img src={tech.src} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;