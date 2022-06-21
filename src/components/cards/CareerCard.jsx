import React from "react";
import "../../styles/cards/CareerCard.styles.css";

const CareerCard = ({ info }) => {
    return (
        <div className="career-card">
            <h3 className="career-card-title" href={info.whereRef} target='_blank'>
                {info.type} @ {info.where}
            </h3>
            <p className="career-card-description">{info.description}</p>
            <div className="career-card-spacer"></div>
            <p className="career-card-dates">{info.start} - {info.end}</p>
        </div>
    );
};

export default CareerCard;