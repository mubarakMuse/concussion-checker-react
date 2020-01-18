import React, {useState,useEffect} from 'react';
import { Button, Modal, Spinner} from 'react-bootstrap';
import axios from 'axios';
import {nearByHospitalUrl} from "/Users/mubarakmuse/Desktop/personal_project/concussion-checker-react/src/data/dataApi.js"

export function RiskButton(props) {

    const [openModal, setOpenModal] = useState(0);
    const [riskStr, setRiskStr] = useState("");
    const [nearByhospitals, setNearByHospitals] = useState([]);

    function hospitals() {
        if (nearByhospitals.results) {
            let hospitals  = nearByhospitals.results.slice(0,3).map((hospital) => (
            <div>
                <a href ={'https://www.google.com/maps/place/' + hospital.vicinity.split(' ').join('+')}> {hospital.name}</a>
            </div>
            ))
            return hospitals
        }
        else {
            return <Spinner animation="grow" />
        }
     
    }

    function calculateRisk() {
        let risk = ""
        if (props.riskTotal/props.totalPossibleRisk > .75 ) {
            risk = "High Risk"
        }
        else if (props.riskTotal/props.totalPossibleRisk> .25) {
            risk = "Meduim Risk"
        } 
        else {
            risk = "Low Risk"

        }
        setRiskStr(risk)
        setOpenModal(true)
    }

    function handleClose() {
        setOpenModal(false)
    }

    useEffect(() => {
        function getNearByHospitals() {
            if (props.coords.latitude && props.coords.longitude) {
                axios.get(nearByHospitalUrl(props.coords))
                .then(res => {
                    const data = res.data;
                    setNearByHospitals(data)
                })
            }
        }
        getNearByHospitals();
      }, [props.coords]);

    return (
        <>
        <Button onClick={calculateRisk}  className="theme-orange" variant="secondary">Calculate Risk </Button>
        <div> <Button href={"/"}  variant="dark" style={{margin: "30px"}}>Back to Home Page</Button> </div>
        <Modal show={openModal} onHide={handleClose} style ={{padding:"3x",  textAlign: "center"}}>
            <Modal.Header closeButton>
                <Modal.Title>Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                <h3>Likelihood you have a concussion:</h3>
                <h4>{riskStr}</h4>  
                <>
                <h3> Nearby Hospitals:</h3>
                {hospitals()}
                </>
                </>            
            </Modal.Body>
            <Modal.Footer>
            <Button  className="theme-orange" variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button href={"/"}  variant="dark" style={{margin: "30px"}}>Back to Home Page</Button>

            </Modal.Footer>
        </Modal>
        </>

    )
}

// export class RiskButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             openModal: false,
//             riskStr: "",
//             data: []
//         }
//         this.calculateRisk = this.calculateRisk.bind(this)
//         this.handleClose = this.handleClose.bind(this)
//         this.callApi = this.callApi.bind(this)

//     }
//     calculateRisk = () => {
//         this.callApi();

//         if (this.props.riskTotal > 150 ) {
//             this.setState({
//                 riskStr: "High Risk",
//                 openModal: true
//             })
//         }
//         else if (this.props.riskTotal > 50) {
//             this.setState({
//                 riskStr: "Intermidate Risk",
//                 openModal: true
//             })
//         } else {
//             this.setState({
//                 riskStr: "Low Risk",
//                 openModal: true
//             })
//         }
// }
//      handleClose = () => {
//     this.setState({
//         openModal: false
//     })
// }
// componentDidMount() {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";

//     fetch(proxyurl + url(this.props.coords))
//     .then(response => response.json())
//     .then(json => this.setState({ data: json.results})) 
//   }
//   callApi() {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";

//     fetch(proxyurl + url(this.props.coords))
//     .then(response => response.json())
//     .then(json => this.setState({ data: json.results})) 
//   }
  
// //   componentWillReceiveProps() {
// //     const proxyurl = "https://cors-anywhere.herokuapp.com/";

// //     fetch(proxyurl + url(this.props.coords))
// //     .then(response => response.json())
// //     .then(json => this.setState({ data: json.results})) 
// //   }
//     render() {
//         let hospitals = this.state.data.map((hospital) => 
//             <p>
//                 {hospital.vicinity}
//             </p>
//             )
//         return(
//             <>
//             <Button onClick={this.calculateRisk} className="theme-orange">
//             Calculate Risk
//             </Button>
//             <Button href={"/q"}  variant="dark" style={{margin: "30px"}}>
//             Questionns
//             </Button>
//             <Modal show={this.state.openModal} onHide={this.handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Likelihood you have a concussion:</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <>
//                     <h1>
//                         {this.state.data? this.state.riskStr : 'sadsa'}
//                     </h1>  
//                     <>
//                     {hospitals}
//                     </>
//                     </>            
//                 </Modal.Body>
//                 <Modal.Footer>
//                 <Button  className="theme-orange" variant="secondary" onClick={this.handleClose}>
//                     Close
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//             </>

//         )
//     }
// }