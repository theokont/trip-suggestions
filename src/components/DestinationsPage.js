import React from "react";
import Destination from "./Destination";
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import '../static/css/App.css';
import '../static/css/DestinationPage.css';

export default class DestinationsPage extends React.Component {
    constructor(props) {
        super(props);
        this.delay = this.delay.bind(this);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {

        if (this.props.destinations) {
            let destinationCols = this.props.destinations.map(destination => {
                    return (
                    <Col md={4}>
                        <Destination 
                            key={destination.destination} 
                            apiUrl={this.props.apiUrl} 
                            destination={destination} 
                        />
                    </Col>);
                }
            )

            let destinationRows = [];
            for (let i = 0; i < destinationCols.length; i++) {
                if ((i+1) % 3 === 0) {
                    // key={i+1 % 3} to have keys count from 0
                    // TODO: if cols.length = even (ie. 10) => it wont populate any remaining destinations that are not in a set of 3
                    destinationRows.push(<Row className="" key={i}>{destinationCols.slice(i-2, i+1)}</Row>)
                }
            }
            
            return (
                <Container className="destinationsContainer">
                    <h2>Popular destinations from {this.props.origin}</h2>
                    <CardGroup className="destinations justify-content-center">{destinationRows}</CardGroup>
                </Container>
            )
        }
        else {
            return(<div></div>);
        }
    }
}
