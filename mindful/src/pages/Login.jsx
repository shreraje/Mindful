import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Navbar from '../components/Navbars/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            passowrd: "",
            redirectTo: null,
            loggedIn: null
        };
    };

    componentDidMount() {
        this.getUser();
    };

    //Verify if a user is saved in the current session and retrieve data
    getUser() {
        axios.get('/user')
        .then(response => {
            console.log('GET USER RESPONSE: ', response.data);
            if (response.data.user) {
                console.log('GET USER: THERE IS A USER SAVED IN THE SESSION');

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                });
            } else {
                console.log('GET USER: NO USER FOUND IN SESSION');
                this.setState({
                    loggedIn: false,
                    username: null
                });
            }
        });
    };
    
    //Hanlde change for form inputs
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //Handle user information when login form is submitted
    handleFormSubmit = event => {
        event.preventDefault();
        console.log('HANDLE LOGIN SUBMIT HIT');
        //Route to POST new user data collected from the form
        axios.post('/user/login', {
                username: this.state.username,
                password: this.state.password
        })
        .then(response => {
            console.log(`LOGIN RESPONSE: ${response}`);
            if (response.status === 200) {
                console.log('SUCCESSFUL LOGIN');
                this.setState({
                    //Send user to homepage if successful
                    redirectTo: '/'
                });
            }
        })
        .catch(err => {
            console.log('LOGIN SERVER ERROR: ', err);
        });
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }}/>
        } else {
            return (
                <div>
                    <Navbar
                        loggedIn={this.state.loggedIn}
                        username={this.state.username}
                    />
                    <Container>
                            <Jumbotron className="jumbo-background">
                                <h1 style={{ textAlign: "center" }}>Welcome to Mindful - Login below</h1>
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
                                    <Button 
                                        variant="info" 
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                    >
                                    Login
                                    </Button>
                                    
                                </Form>
                            </Jumbotron>
                       
                    </Container>
                </div >
            );
        }
    };
};

export default Login;