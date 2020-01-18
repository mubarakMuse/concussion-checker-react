import React, { Component } from 'react';
import { Container, FormGroup, Col, ProgressBar} from 'react-bootstrap';
import Symptoms from "./Symptoms"
import {RiskButton} from "./RiskButton"
import axios from 'axios';

class SymptomsBox extends Component {
    constructor(props) {
        super(props);
        this.updateRiskTotal = this.updateRiskTotal.bind(this)
        this.setTotalPossibleRisk = this.setTotalPossibleRisk.bind(this)
        this.state = {
            riskTotal: 0,
            totalPossibleRisk:0,
            persons: [],
            coords: {}
        };
    }
    updateRiskTotal(val) {
        this.setState({
            riskTotal: (this.state.riskTotal + val)
        })
    };
    setTotalPossibleRisk(val) {
        this.setState({
            totalPossibleRisk: val
        })
    };
    componentWillMount() {
        let self = this;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
          function success(pos) {
            self.setState({coords: pos.coords})
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error, options);
    }

    render() {
        let now = this.state.totalPossibleRisk? (this.state.riskTotal/this.state.totalPossibleRisk) * 100: 0
        return(
            <Container style= {{textAlign: 'center'}} fluid = {true}>
                <h2>Select your symptoms:</h2>
                <ProgressBar striped variant="danger"  now={now} label={`${Math.trunc(now)}%`} />
                <FormGroup className = "badge-checkboxes checkbox">
                <div>
                    <Col md={12}>
                    <Symptoms setTotalPossibleRisk = {this.setTotalPossibleRisk} updateRiskTotal= {this.updateRiskTotal}/>
                    </Col>
                </div>
                </FormGroup>
                <RiskButton coords = {this.state.coords} riskTotal= {this.state.riskTotal}/>
            </Container>
        )
    }
};
export default SymptomsBox;