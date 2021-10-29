import { React, useState } from 'react';
import DatePicker from "react-datepicker";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import '../static/css/FlightSearchModal.css'
import "react-datepicker/dist/react-datepicker.css";

export default function FlightSearchModal(props) {
    const [modalState, setModalState] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [cheapestFlight, setCheapestFlight] = useState();


    function handleClose(event) {
        props.onHide(event);
        alert(startDate.toISOString());
        setModalState(0);
        console.log(cheapestFlight);
    }

    function handleSearch(destination, departureDate, returnDate, adults) {
        fetchCheapestFlight(destination, departureDate, returnDate, adults);
        setModalState(modalState + 1);
    }

    function fetchCheapestFlight(destination, startDate, endDate, adults) {   
        
        let departureDate = startDate.substring(0, startDate.indexOf("T"));
        let returnDate = endDate.substring(0, endDate.indexOf("T"));
        console.log(`departureDate = ${departureDate}`);
        axios.get(`${props.apiUrl}/flight-offer-search?origin=${props.originCode}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&max=1`, {credentials: "same-origin"})
          .then(response => {
            console.log(response.data);
            setCheapestFlight(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }

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
                Flight search for {props.destination.cityName}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{justifyContent:"center", textAlign:"center"}}>
        { modalState === 0 && (
            <div>
                <div style={{display:"flex"}}>
                    <p style={{width: "50%"}}> Departure date: </p> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div style={{display:"flex"}}>
                    <p style={{width: "50%"}}> Arrival date: </p> <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
            </div>
            )
        }
        { modalState === 1 && (
            <div>

            </div>   
        )}
        </Modal.Body>
        <Modal.Footer>
            {(modalState === 0)
            ?   <div>
                    <Button onClick={props.onHide}>Cancel</Button>
                    <Button style={{marginLeft:"10px"}} onClick={() => handleSearch(props.destination.cityCode, startDate.toISOString(), endDate.toISOString(), 1)}>Search</Button>
                </div>
            :   <div>
                    <Button onClick={(event) => handleClose(event)}> Close </Button>
                </div>
            }
            
        </Modal.Footer>
        </Modal>
    );
}
