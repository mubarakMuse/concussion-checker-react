import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Jumbotron, Image} from 'react-bootstrap';

class AppJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid={true}  className = "theme-orange-nohover">
                <span>
                    <Image src={logo} fluid />
                    <h1 className = "text-white">Concussion Checker</h1>
                    </span>
            </Jumbotron>
            
        );
    }
};
export default AppJumbotron;