import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PointsOfInterestPage from './components/PointsOfInterestPage';
import DestinationsPage from './components/DestinationsPage';
import './static/css/App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: "http://localhost:8080/api",
      origin: null,
      destinations: null,
      destinationArr: [],
    }
  }

  setOrigin(event) {
    this.setState({origin: event.target.value});
  }

  handleState(data) {
    let destArr = this.state.destinationArr;
    destArr.push(data);
    this.setState({destinationArr: destArr})
  }

  render() {
    return (
    <div>
      <Switch>
        <Route path="/destinations/pois" render = {() => (<PointsOfInterestPage apiUrl={this.state.apiUrl}/>)} />
        <Route path="/destinations" render = {() => (
          <DestinationsPage
           origin={this.state.origin}
           destinations={this.state.destinations} 
           apiUrl={this.state.apiUrl} 
           handleState={data => this.handleState(data)}
           handlePoi={(data, name) => {
            let index = this.state.destinationArr.findIndex(x => x.destinationName === name);
            this.setState.destinationArr[index].poi = data;
           }}
           />
           )} 
          />
        <Route path="/" render = {() => (
          <LandingPage
            handleOriginInputChange = {event => this.setOrigin(event)} 
            apiUrl={this.state.apiUrl}
            origin={this.state.origin}
            handleResponse={data => this.setState({destinations: data})}
            handleError={(response) => this.setState({destinations: response.status})}
          />
          )}
        />
      </Switch>
    </div>
    );
  }
}

export default App;