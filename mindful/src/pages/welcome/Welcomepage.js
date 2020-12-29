import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
// import 'materialize-css';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    return (
        <div>
            <Container>
                
                    <h1 className="jumbotron bg-info text-white" style={{ textAlign: "center" }}>Welcome to Mindful Meditation App</h1>
                    <span class="d-inline-flex p-2 bg-danger text-white" style={{ fontWeight: "bold" }}>Please Login First!!!</span>
               
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
                            Submit
                        </Button>
                    </Form>
            </Container>
        </div >
    );
};

export default Welcome;