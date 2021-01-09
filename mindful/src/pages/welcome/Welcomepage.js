import React from 'react';
import axios from 'axios';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Navbar from '../../components/Navbars/Navbar';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`SIGNUP FORM USER: ${this.state.email}`);
        //request to server here
        axios.post('/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            if (response.data) {
                console.log('successful signup');
                this.setState({
                    redirectTo: '/login'
                });
            } else {
                console.log('Signup error');
            }
        })
        .catch(err => {
            console.log('Sign up server error');
            console.log(err);
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
                                        name="email" 
                                        placeholder="Enter email" 
                                        value={this.state.email}
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
                                <Button variant="info" type="submit">
                                    Sign in
                                </Button>
                            </Form>
                        </Jumbotron>
                   
                </Container>
            </div >
        );
    };
};

export default Welcome;