import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Row } from "reactstrap";


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
            <Row>
                <NasaCard
                key={nasa.title}
                title={nasa.title}
                explanation={nasa.explanation}
                date={nasa.date}
                url={nasa.url}
                copyright={nasa.copyright}
            />
                <NasaCard
                title="Example title"
                explanation="Example story text here"
                date="10/24/2019"
                copyright="David York"
                url="https://source.unsplash.com/random"
            />
                <NasaCard
                title="Example title"
                explanation="Example story text here"
                date="10/24/2019"
                copyright="David York"
                url="http://lorempixel.com/400/200"
            />
                <NasaCard
                title="Example title"
                explanation="Example story text here"
                date="10/24/2019"
                copyright="David York"
                url="https://loremflickr.com/320/240"
            />
                <NasaCard
                title="Example title"
                explanation="Example story text here"
                date="10/24/2019"
                copyright="David York"
                url="http://lorempixel.com/400/200/sports"
            />
                <NasaCard
                title="Example title"
                explanation="Example story text here"
                date="10/24/2019"
                copyright="David York"
                url="http://lorempixel.com/400/200"
            />

            </Row>
        </div>
    )
};
