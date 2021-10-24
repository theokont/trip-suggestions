import React from 'react';
import { Container } from "react-bootstrap";
import OriginInput from './OriginInput';
import "../static/css/LandingPage.css"

export default function LandingPage(props) {

    return (
        <div className="landingPage">
            <Container fluid="md" className="landingPageContainer bg-dark">
                {/* <Header /> */}
                <OriginInput 
                    handleChange={props.handleOriginInputChange} 
                    apiUrl={props.apiUrl} 
                    origin={props.origin}
                    handleResponse = {props.handleResponse}
                    handleError = {props.handleError} 
                />        
            </Container>
        </div>
    );
    
}