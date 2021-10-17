import React from 'react';
import OriginInput from './OriginInput';
import Header from './Header';
import "../static/css/App.css"

export default function LandingPage(props) {

    return (
        <div>
            <div className="landingPageContainer">
                <Header />
                <OriginInput 
                    handleChange={props.handleOriginInputChange} 
                    apiUrl={props.apiUrl} 
                    origin={props.origin}
                    handleResponse = {props.handleResponse}
                    handleError = {props.handleError} 
                />        
            </div>
        </div>
    );
    
}