import React from 'react';
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
        <div>
            <h2 className="cityInput"> Ready to fly? </h2>
            <input 
                className="cityInput" 
                placeholder="Where are you flying from?" 
                onChange={event => props.handleChange(event)} 
                onKeyDown={event => handleEnter(event)}
            />
            <button className="cityInput" onClick={event => getDestinationsResponse(event)}>
                Search
            </button>
        </div>
    );   
} 