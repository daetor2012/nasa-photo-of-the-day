import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaInfo() {
    const [nasa, setNasa] = useState({});
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=M7MY7LKWMlhERDj76izU0MK3dA7CHH2bMPFRpVhc")
            .then(response => {
                console.log(response);
                setNasa(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <NasaCard
                key={nasa.title}
                title={nasa.title}
                explanation={nasa.explanation}
                date={nasa.date}
                url={nasa.url}
                copyright={nasa.copyright}
            />
            
        </div>
    )
};