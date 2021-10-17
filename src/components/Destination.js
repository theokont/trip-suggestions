// import Button from "@restart/ui/esm/Button";
import {React, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import image from "../static/images/destination.jpg"
import "../static/css/Destination.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Destination(props) {

    const [destinationName, setDestinationName] = useState(props.destination.destination);
    const [countryCode, setCountryCode] = useState(null);
    let history = useHistory();

    useEffect( () => {
        getCityAddress();
    //   eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      function getCityAddress() {
        axios.get(props.apiUrl + "/destination-address/" + props.destination.destination, {credentials: "same-origin"})
          .then((response) => {
              if (response.data) {
                console.log(response.data['cityName']);
                setDestinationName( response.data['cityName']);
                setCountryCode(response.data['countryCode']);
              }
          })
          .catch((error) => {
            console.log(error);
        })
    }

    function getPointsOfInterest(event) {
        history.push(`/destinations/pois?destination=${destinationName}&countryCode=${countryCode}`);
    }

    return (
        <Card className="text-center destinationsCard" style={{ width: '12rem', height: '14rem', float: 'left'}}>
            <Card.Img variant="top" src={image} className="cardImage"/>
            <Card.Body>
                <Card.Title>
                    <p className="cardTitle">{destinationName}, {countryCode}</p>
                </Card.Title>
                <Button variant="primary" onClick={ event => getPointsOfInterest(event) }>
                    Attractions
                </Button>
            </Card.Body>
        </Card>
    );

    }
