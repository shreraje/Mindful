import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import { CardDeck, Card, Col, Row, Jumbotron, Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <CardDeck>
                            <Col>

                                <Card className="card card-breathing">
                                    <Card.Body className="cardText">
                                        <Card.Title ><b>Breathing Exercises</b></Card.Title>
                                        <Card.Text>
                                            Breathing exercises are one of the most efficient ways to deal with stress. Through this page you will have an array of shapes show up for you to breath to, to help manage your stress and breathing patterns.
                                                </Card.Text>
                                        <Button href="/breathing" style={{ background: " rgb(126, 111, 100)"}}>Breathing</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="card card-videos">
                                    <Card.Body className="cardText">
                                        <Card.Title ><b>Videos</b></Card.Title>
                                        <Card.Text>
                                        Visual and Auditory aides are always a big help. Through this page you will see an array of videos regarding everything from yoga, to relaxation exercises, to lifestyle videos to help focus on your relaxation levels.
                                                </Card.Text>
                                        <Button href="/video" style={{ background: " rgb(126, 111, 100)" }}>Videos</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </CardDeck>

                    </Row>
                    <Row id="workout-row">
                        <CardDeck>
                            {/* <Col>
                                <Card className="card card-timers">
                                    <Card.Body className="cardText">
                                        <Card.Title>Meditation Timers</Card.Title>
                                        <Card.Text>
                                            Meditation has been proven to help people relax and relieve stress. Use this feature to set timers for your meditaion.
                                            </Card.Text>
                                        <Button href="/timers" style={{ background: " rgb(126, 111, 100)"}}>Timers</Button>
                                    </Card.Body>
                                </Card>
                            </Col> */}
                            <Col>
                                <Card className="card card-workouts">
                                    <Card.Body className="cardText">
                                        <Card.Title><b>Workouts</b></Card.Title>
                                        <Card.Text>
                                            Exercise is a vital part of living a healthy life. Use this page to create workout plans and track your progress!
                                            </Card.Text>
                                        <Button href="/workout" style={{ background: " rgb(126, 111, 100)"}}>Workouts</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </CardDeck>
                    </Row>
                </Container>
            </Jumbotron>
            <Footer />
        </div>
    );
};

export default Homepage;