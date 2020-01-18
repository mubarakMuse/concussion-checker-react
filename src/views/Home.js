import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '/Users/mubarakmuse/Desktop/personal_project/concussion-checker-react/src/views/ConcussionChecker/images/logo.png'

function Home(props) {
  return (
    <Card style={{ width: '18rem', alignContent:"center" }}>
      <Card.Img className= "theme-orange-nohover" variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Concussion Checker</Card.Title>
        <Card.Text>
          An app to diagnosis yourself for a conncussion based on the symptoms you are experincing.
           It also provide you with the 3 nearest hospitals as apart of the analysis.
        </Card.Text>
        <Button className= "theme-orange-nohover"  href= {"/concussion-checker"} variant="secondary">Concussion Checker App</Button>
      </Card.Body>
    </Card>
  )
}
export default Home;