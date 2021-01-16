import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import { CardDeck, Card, Col, Row, Jumbotron, Container, Button, Toast } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';

function Contact() {
    return(
        <div>
            <Navbar/>
            <Jumbotron fluid>
                <Container fluid>
                        <Row>
                                <CardDeck>
                                <Col>

                                        <Card className="card card-evan">
                                            <Card.Body className="cardText">
                                                <Card.Title >Evan Mackay</Card.Title>
                                                <Card.Text>
                                                   Overall Mastermind and captain. Please enter information about work and skills that you have done and provided in this space. 1-2 lines of information please. Email him at the button below
                                                </Card.Text>
                                                <Button>Email</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="card card-evan">
                                            <Card.Body className="cardText">
                                                <Card.Title >Jon Jesse</Card.Title>
                                                <Card.Text>
                                                    Back End Guru, legend with css images. Please enter information about work and skills that you have done and provided in this space. 1-2 lines of information please. Email him at the button below
                                                </Card.Text>
                                                <Button href="/videos">Email</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </CardDeck>
                                
                        </Row>
                        <Row>
                                <CardDeck>
                                <Col>
                                    <Card className="card card-evan">
                                        <Card.Body className="cardText">
                                            <Card.Title>Raj Shreshtha</Card.Title>
                                            <Card.Text>
                                                Front end wizard. Please enter information about work and skills that you have done and provided in this space. 1-2 lines of information please. Email him at the button below
                                            </Card.Text>
                                            <Button href="/timers">Email</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="card card-evan">
                                        <Card.Body className="cardText">
                                            <Card.Title>Dallin Suppes</Card.Title>
                                            <Card.Text>
                                                Mediocore front end. Please enter information about work and skills that you have done and provided in this space. 1-2 lines of information please. Email him at the button below 
                                            </Card.Text>
                                            <Button href="/workouts">Email</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </CardDeck>
                        </Row>
                </Container>
            </Jumbotron>
            <Footer/>
        </div>
    );
};

export default Contact;