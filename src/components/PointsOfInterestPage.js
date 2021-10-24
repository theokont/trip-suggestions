import React, { useState, useEffect } from 'react';
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import PointOfInterest from './PointOfInterest';
import queryString from 'query-string';
import axios from 'axios';

import "../static/css/PointsOfInterestPage.css"

export default function PointsOfInterestPage(props) {
    
    const [pointsOfInterest, setPointsOfInterest] = useState(null);
    const [destination, setDestination] = useState(null);
    
    useEffect( () => {
        const parsed = queryString.parse(window.location.search);
        setDestination(parsed.destination);
        console.log("Get points")
        axios.get(`${props.apiUrl}/points-of-interest?destination=${parsed.destination}&countryCode=${parsed.countryCode}`, {credentials: "same-origin"})
          .then((response) => {
            console.log("Response")
            console.log(response.data);
            if (response.data) {
                setPointsOfInterest(response.data);
            }
            else {
                console.log(`problem occured`);
            }
          })
          .catch((error) => {
            console.log(error);
        })

        //   eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!pointsOfInterest) {
        return (
            <div>
            </div>
        );
    }
    
    let pointsOfInterestCols = pointsOfInterest.map(poi => {
        return <Col> <PointOfInterest key={poi.name} attractionName={poi.name} /> </Col>
    });
    
    let pointsOfInterestRows = [];

    for (let i = 0; i < pointsOfInterestCols.length; i++) {
        if ((i+1) % 3 === 0) {
            pointsOfInterestRows.push(<Row key={i}>{pointsOfInterestCols.slice(i-2, i+1)}</Row>)
        }
    }

    return (
        <div className="pointsOfInterestOuter">
            <Container fluid className="pointsOfInterestContainer bg-dark">
                <h2 className="headerMsg">{destination} attractions</h2>
                <CardGroup className="pointsOfInterest justify-content-center">{pointsOfInterestRows}</CardGroup>
            </Container>
        </div>
        
    );

}