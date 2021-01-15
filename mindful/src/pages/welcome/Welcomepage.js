import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Navbar from '../../components/Navbars/Navbar';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
    };

    //Handle changes to form fields
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //Handle form submit event + post user data to DB
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`SIGNUP REQUEST FROM USER: ${this.state.username}`);
        //Route to POST user data collected from the form
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            if (!response.data.errmsg) {
                console.log('SUCCESSFUL SIGNUP');
                this.setState({
                    redirectTo: '/login'
                });
            } else {
                console.log('USERNAME ALREADY TAKEN');
            }
        })
        .catch(err => {
            console.log('SIGNUP SERVER ERROR', err);
        });
    };

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                        <Jumbotron className="jumbo-background">
                            <h1 style={{ textAlign: "center" }}>Welcome to Mindful</h1>
                        </Jumbotron>
                        
                        <Jumbotron className="jumbot">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="username" 
                                        placeholder="Enter email" 
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
    
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="password" 
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Button type="submit" onClick={this.handleFormSubmit}>
                                    Sign Up
                                </Button>

                                <Form.Text>Already have an account?</Form.Text>
                                <Button
                                    
                                    type="button"
                                ><a href="/login" style={{ color: "white"}}>Login here!</a></Button>
                            </Form>
                        </Jumbotron>
                
                </Container>
            </div >
        );
    };
};

export default Welcome;