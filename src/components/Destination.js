// import Button from "@restart/ui/esm/Button";
import { React, useState } from "react";
import { Card, Button, } from 'react-bootstrap';
import { useHistory } from "react-router";
import image from "../static/images/destination.jpg"
import "../static/css/Destination.css";
import FlightSearchModal from "./FlightSearchModal";

export default function Destination(props) {

    const [modalShow, setModalShow] = useState(false);

    let history = useHistory();
    let cityCode = props.destination.cityCode;
    let cityName = props.destination.cityName; 
    let countryCode = props.destination.countryCode;
    let status = props.destination.status;

    function getPointsOfInterest(event) {
        history.push(`/destinations/pois?destination=${cityName}&countryCode=${countryCode}`);
    }

    
    return (
        <Card className="text-center destinationsCard" style={{ width: '12rem', height: '15.5rem', float: 'left'}}>
            <Card.Img variant="top" src={image} className="cardImage"/>
            <Card.Body>
                <Card.Title>
                    {status === "200"
                    ? <p className="cardTitle"> {cityName}, {countryCode}</p>
                    : <p className="cardTitle"> {cityCode} (Failed to load)</p>
                    }
                </Card.Title>  
                {cityCode 
                ? <div className="cardBtn">
                    <Button variant="primary" size="sm" onClick={ event => getPointsOfInterest(event) }>
                        Attractions
                    </Button>
                    <Button className="searchButton" variant="primary" size="sm" onClick={ () => setModalShow(true)} >
                        Search flights
                    </Button>

                    <FlightSearchModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        destination = {props.destination}
                        origin = {props.origin}
                        originCode = {props.originCode}
                        apiUrl = {props.apiUrl}
                    />
                </div>
                : <div>
                    <p></p>
                </div>
                }
                
            </Card.Body>
        </Card>
    );

    }
