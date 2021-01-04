import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import { Card, Col, Row } from 'react-bootstrap';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Row>
                <Col className="card-col">
                    <Card className="card">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Breathing Exercises</Card.Title>
                            <Card.Text>
                                Breathing exercises are one of the most efficient ways to deal with stress. Through this page you will have an array of shapes show up for you to breath to, to help manage your stress and breathing patterns.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card">>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Videos</Card.Title>
                            <Card.Text>
                                Through this page you will see an array of videos regarding everything from yoga, to relaxation exercises, to lifestyle videos to help focus on your relaxation levels.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="card-col">
                    <Card className="card">>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Meditation Timers</Card.Title>
                            <Card.Text>
                                Select different timers with different animations to meditate and relax with.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card">>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Workouts</Card.Title>
                            <Card.Text>
                                View differnet workouts and create lists of your favorites!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Homepage;