import React from "react";
import "../../styles/pages/Skills.styles.css";
import SkillCard from "../cards/SkillCard";

const Skills = ({ }) => {


    const skills = [
        { url: "assets/js.svg", name: "JavaScript", href: "https://www.javascript.com/" },
        { url: "assets/react.svg", name: "React", href: "https://reactjs.org/" },
        { url: "assets/redux.svg", name: "Redux", href: "https://redux.js.org/" },
        { url: "assets/react-router.svg", name: "React Router", href: "https://reactrouter.com/" },
        { url: "assets/html.svg", name: "HTML", href: "https://html.com/" },
        { url: "assets/css.svg", name: "CSS", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
        { url: "assets/sass.svg", name: "SCSS", href: "https://sass-lang.com/" },
        { url: "assets/webpack.svg", name: "Webpack", href: "https://webpack.js.org/" },
        { url: "assets/rollup.svg", name: "Rollup", href: "https://rollupjs.org/guide/en/" },
        { url: "assets/npm.svg", name: "NPM", href: "https://www.npmjs.com/" },
        { url: "assets/babel.svg", name: "Babel", href: "https://babeljs.io/" },
        { url: "assets/jest.svg", name: "Jest", href: "https://jestjs.io/" },
    ];

    return (
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skills.map(skill => <SkillCard key={skill.name} href={skill.href} url={skill.url} name={skill.name} width="50px" />)}
            </div>
        </div>
    );
};

export default Skills;