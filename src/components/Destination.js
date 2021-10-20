// import Button from "@restart/ui/esm/Button";
import { React } from "react";
import { Card, Button } from 'react-bootstrap';
import image from "../static/images/destination.jpg"
import "../static/css/Destination.css";
import { useHistory } from "react-router";

export default function Destination(props) {
    let history = useHistory();
    let cityName = props.destination.cityName; 
    let countryCode = props.destination.countryCode;

    function getPointsOfInterest(event) {
        history.push(`/destinations/pois?destination=${props.destination.cityName}&countryCode=${props.destination.countryCode}`);
    }

    return (
        <Card className="text-center destinationsCard" style={{ width: '12rem', height: '14rem', float: 'left'}}>
            <Card.Img variant="top" src={image} className="cardImage"/>
            <Card.Body>
                <Card.Title>
                    {cityName
                    ? <p className="cardTitle"> {cityName}, {countryCode}</p>
                    : <p className="cardTitle"> Error 404, not found</p>
                    }
                </Card.Title>
                <Button variant="primary" onClick={ event => getPointsOfInterest(event) }>
                    Attractions
                </Button>
            </Card.Body>
        </Card>
    );

    }
