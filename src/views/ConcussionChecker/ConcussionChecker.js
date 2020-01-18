import React, { Component } from 'react';

import AppJumbotron from './components/AppJumbotron'
import SymptomsBox from './components/SymptomsBox'
import {AppFooter} from "./components/AppFooter"


class ConcussionChecker extends Component {
  render() {

  
  return (
    <>
   <AppJumbotron/>
   <SymptomsBox/>
   <AppFooter/>
   </>
  );
};
}

export default ConcussionChecker;
