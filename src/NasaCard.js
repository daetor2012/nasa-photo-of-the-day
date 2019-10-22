import React from "react";

const NasaCard = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url} alt={props.title} />
            <p>{props.explanation}</p>
            <p>{props.copyright}</p>

        </div>
    );
};
export default NasaCard;
