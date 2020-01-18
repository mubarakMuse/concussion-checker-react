import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import './App.css';
import ConcussionChecker from "./views/ConcussionChecker/ConcussionChecker"
import Home from './views/Home'



class App extends Component {
  render() {
  return ( 
    <React.Fragment>
           <Router>
            <Switch>
              <Route exact default path= "/" component={Home} />
              <Route exact path= "/concussion-checker" component={ConcussionChecker} />
            </Switch>
          </Router>
    </React.Fragment>
  );
};
}

export default App;
