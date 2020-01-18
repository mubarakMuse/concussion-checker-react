import React, { Component } from 'react';

import AppJumbotron from './ConcussionChecker/components/AppJumbotron'
import SymptomsBox from './ConcussionChecker/components/SymptomsBox'
import {UserInfo} from "../components/UserInfo"
import { Container } from 'react-bootstrap';


class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    
    }


  render() {
  return (
    <Container style ={{padding:"30px",  alignItems: "center"}}>
        <UserInfo/>
    </Container>
  );
};
}

export default Questionnaire;