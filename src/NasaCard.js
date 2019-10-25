import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';
import "./App.css";
const NasaCard = props => {
    return (
        <Col xs="6" sm="4" lg="2" key={props.title}>
            <Card className="styling" color="primary">
                <CardImg width="50%" src={props.url} alt="Image"></CardImg>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <h3>{props.date}</h3>
                    <CardText>{props.explanation}</CardText>
                    <CardSubtitle>{props.copyright}</CardSubtitle>
                </CardBody>
                </Card>
        </Col>
    );
};
export default NasaCard;
