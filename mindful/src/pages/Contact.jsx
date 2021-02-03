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
                                            <Card.Body className="cardText" style={{backgroundColor: "white"}}>
                                                <Card.Title ><b>Evan Mackay</b></Card.Title>
                                                <Card.Text>
                                                   Evan had a hand in every part of the project. He has strong skills in not only back end, but front end as well. If you have any questions at all please contact him at evan@mindful.com
                                                </Card.Text>
                                                {/* <Button>Email</Button> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="card card-evan">
                                            <Card.Body className="cardText" style={{backgroundColor: "white"}}>
                                                <Card.Title ><b>Jon Jesse</b></Card.Title>
                                                <Card.Text>
                                                    Jon had a strong hand in css images, and a knack for the back end as well as front end skills. If You have any ideas about breathing excersise images, or questions for the overall website please reach him at jon@mindful.com
                                                </Card.Text>
                                                {/* <Button href="/videos">Email</Button> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </CardDeck>
                                
                        </Row>
                        <Row>
                                <CardDeck>
                                <Col>
                                    <Card className="card card-evan">
                                        <Card.Body className="cardText" style={{backgroundColor: "white"}}>
                                            <Card.Title><b>Raj Shreshtha</b></Card.Title>
                                            <Card.Text>
                                                Raj is the front end wizard with our website. He focused much of his efforts on helping develope the front end but also has a strong understanding of the backend. Reach out to him for any front end needs at raj@mindful.com
                                            </Card.Text>
                                            {/* <Button href="/timers">Email</Button> */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="card card-evan">
                                        <Card.Body className="cardText" style={{backgroundColor: "white"}}>
                                            <Card.Title><b>Dallin Suppes</b></Card.Title>
                                            <Card.Text>
                                                Dallin helped focusing on the front end of the website. He spent much of his time helping design in format much of the webpage. If you have any questions or comments please reach out at dallin@mindful.com 
                                            </Card.Text>
                                            {/* <Button href="/workouts">Email</Button> */}
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