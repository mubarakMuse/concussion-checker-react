import React, { Component } from 'react';
import clevelandLogo from '../images/ClevelandClinic.jpeg'
import Brainline from '../images/Brainline.png'
import CDC from '../images/CDC.jpg'
import MayoClinic from '../images/MayoClinic.png'
import ResearchGate from '../images/ResearchGate.png'
import WebMD_logo from '../images/WebMD_logo.png'



import { Image} from 'react-bootstrap';

export class AppFooter extends Component {
    render() {
        return (
            <div className="d-flex flex-column" style= {{textAlign: 'center'}} >
            <br></br>
            <footer className="footer">
            <span>
            <Image src={clevelandLogo} fluid className = "clevelandLogo" />
            <Image src={MayoClinic} fluid className = "mayoLogo" />
            <Image src={Brainline} fluid className = "researchLogo" />
            <Image src={ResearchGate} fluid className = "researchLogo" />
            <Image src={CDC} fluid className = "researchLogo" />
            <Image src={CDC} fluid className = "researchLogo" />
            <Image src={WebMD_logo} fluid className = "researchLogo" />
            </span>
            </footer>
        </div>
        );
    }
};
