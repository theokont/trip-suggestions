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
                            key={destination.cityCode} 
                            apiUrl={this.props.apiUrl} 
                            origin = {this.props.origin}
                            originCode = {this.props.originCode}
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
                <div className="destinationsOuter">
                    <Container className="bg-dark">
                        <Row>
                            <Col  style={{marginTop: "20px"}}>
                                <h2 className="headerMsg">Popular destinations from {this.props.origin}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col  style={{marginTop: "20px"}}>
                                <CardGroup className="destinations justify-content-center">{destinationRows}</CardGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            )
        }
        else {
            return(<div></div>);
        }
    }
}
