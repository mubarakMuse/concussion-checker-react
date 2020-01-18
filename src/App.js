import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import './App.css';
import ConcussionChecker from "./views/ConcussionChecker/ConcussionChecker"
import Questionnaire from "./views/Questionnaire"
import Home from './views/Home'



class App extends Component {
  render() {

  
  return (
    // <div style ={{padding:"30px",  alignItems: "center", backgroundColor:"red"}}>

    
    <React.Fragment style ={{padding:"30px",  alignItems: "center", backgroundColor:"red"}}>
           <Router>
            <Switch>
              <Route exact path= "/cc" component={ConcussionChecker} />
              <Route exact path= "/q" component={Questionnaire} />
              <Route exact default path= "/" component={Home} />
            </Switch>
          </Router>
    </React.Fragment>
    // </div>
  );
};
}

export default App;
