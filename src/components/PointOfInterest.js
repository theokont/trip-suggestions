import React from "react";
import { Card } from 'react-bootstrap';

import image from "../static/images/point_of_interest_symbol.png"

export default function PointOfInterest(props) {

    return (
        <Card className="pointsOfInterestCard" style={{ width: '12rem', height: '12rem', float: 'left'}}>
            <Card.Img variant="top" src={image} className="cardImage"/>
            <Card.Body>
                <Card.Title>
                    <p className="cardTitle">{props.attractionName}</p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}