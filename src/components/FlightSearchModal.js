import { React, useState } from 'react';
import DatePicker from "react-datepicker";
import { Modal, Button } from "react-bootstrap";
import '../static/css/FlightSearchModal.css'
import "react-datepicker/dist/react-datepicker.css";

export default function FlightSearchModal(props) {
    const [modalState, setModalState] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleClose(event) {
        props.onHide(event);
        alert(startDate.toISOString());
        setModalState(0);
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
                Flight search for {props.cityName}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { modalState === 0 && (
            <div>
                <p>Please select departure and arrival date</p>
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
                    <Button style={{marginLeft:"10px"}} onClick={() => setModalState(modalState + 1)}>Search</Button>
                </div>
            :   <div>
                    <Button onClick={(event) => handleClose(event)}> Close </Button>
                </div>
            }
            
        </Modal.Footer>
        </Modal>
    );
}
