import React from 'react';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
// import 'materialize-css';
import Navbar from '../../components/Navbars/Navbar'
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                    <Jumbotron className="jumbo-background">

                        <h1 style={{ textAlign: "center" }}>Welcome to Mindful
                        </h1>
                    </Jumbotron>
                    
                    <Jumbotron className="jumbot">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="info" type="submit">
                                Sign in
                            </Button>
                        </Form>
                    </Jumbotron>
               
            </Container>
        </div >
    );
};

export default Welcome;