import React, { Component } from 'react';
import { Image, Container, Card, Button, Col } from 'react-bootstrap';
import logo from '/Users/mubarakmuse/Desktop/personal_project/my-app/src/views/ConcussionChecker/images/logo.png'

function Home(props) {
  return (
  <Container fluid  >
    <Col md ={1}>
    <Card style={{ width: '18rem', alignContent:"center" }}>
      <Card.Img className= "theme-orange-nohover" variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Concussion Checker</Card.Title>
        <Card.Text>
          An app to diagnosis yourself for a conncussion based on the symptoms you are experincing.
           It also provide you with the 3 nearest hospitals as apart of the analysis.
        </Card.Text>
        <Button className= "theme-orange-nohover"  href= {"/cc"} variant="secondary">Concussion Checker App</Button>
      </Card.Body>
    </Card>
    </Col>

    </Container>
  )
}
export default Home;