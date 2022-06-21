import React, { useEffect } from "react";
import "../../styles/pages/About.styles.css";
import CareerCard from "../cards/CareerCard";

const About = ({}) => {

    const infoArray = [
        {
            type: 'Web Development',
            where: 'DECSIS',
            start: '2021',
            end: 'CURRENT'
        },
        {
            type: 'Internship',
            where: 'DECSIS',
            description: 'Monitoring Console Implementation',
            start: 'SUMMER',
            end: '2021'
        },
        {
            type: 'Internship',
            where: 'DECSIS',
            description: 'Data Quality Improvement',
            start: 'SUMMER',
            end: '2020'
        }
    ];

    const infoCards = infoArray.map((info, index) => <CareerCard key={index} info={info} />);

    return (
        <div className="about">
            <h2 className="about-title">About</h2>
            <div className="about-container">
                <div className="about-picture">
                    <img src="assets/in-brush2.png" alt="me" />
                </div>
                <div className="about-text">
                    <p className="about-text-first">Hi! I'm André Rato, I'm 22 years old and I'm from Portugal! I'm a developer who has passion for building clean web applications. I enjoy the process of turning ideas into creative real projects.</p>
                    <p className="info-subtitle"><b className="info-subtitle">Bachelor's Degree</b></p>
                    <p className="info-item">Universidade de Évora (2019-2022)</p>
                </div>

            </div>
            <div className="info-container">
                <div className="info-cards">{infoCards}</div>
            </div>
        </div>
    );
};

export default About;