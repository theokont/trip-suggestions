import React from 'react';
import { Modal, Button } from "react-bootstrap";
import '../static/css/FlightSearchModal.css'


export default function FlightSearchModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="flight-search-pop-up"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title 
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }} 
                id="contained-modal-title-vcenter">
                Flights for {props.cityName}, {props.countryCode}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4></h4>
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}
