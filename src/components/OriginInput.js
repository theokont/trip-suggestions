import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import "../static/css/OriginInput.css"
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function OriginInput(props) {
    let history = useHistory();

    function getDestinationsResponse(event) {
        axios.get(props.apiUrl + "/most-booked-destinations/" + props.origin, {credentials: "same-origin"})
          .then(response => {
            console.log(response.data);
            props.handleResponse(response.data);
          })
          .then(history.push("/destinations"))
          .catch((error) => {
            console.log(error);
          })
    }

    
    function handleEnter(event) {
        if (event.key === 'Enter') {
            getDestinationsResponse(event);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h2 className="cityInput"> Ready to fly? </h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <input 
                        className="cityInput" 
                        placeholder="Where are you flying from?" 
                        onChange={event => props.handleChange(event)} 
                        onKeyDown={event => handleEnter(event)}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Button className="cityInput" variant="light" size="sm" onClick={event => getDestinationsResponse(event)}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Container>
    );   
} 