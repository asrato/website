import React from "react";
import "../../styles/cards/SkillCard.styles.css";

const SkillCard = ({ name, href, url }) => {
    return (
        <a target="_blank" href={href} className="skill-card">
            <div className="skill-card-img">
                <img src={url} alt="skill" />
            </div>
            <div className="skills-spacer"></div>
            <h2>{name}</h2>
        </a>
    );
};

export default SkillCard;