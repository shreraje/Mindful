import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../../Services/AuthService';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Message from '../../components/Message';
import Navbar from '../../components/Navbars/Navbar';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome(props) {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    },[]);

    //Handle change to form inputs
    const handleInputChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const resetForm = () => {
        setUser({ username: '', password: ''});
    };

    //Handle form submit event 
    const handleFormSubmit = event => {
        event.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000)
            }
        });
    };

    return (
        <div>
            <Navbar/>
            <Container>
                    <Jumbotron className="jumbo-background">
                        <h1 style={{ textAlign: "center" }}>Welcome to Mindful</h1>
                    </Jumbotron>
                    
                    <Jumbotron className="jumbot">
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter email" 
                                    onChange={handleInputChange}
                                />
                                <Form.Text className="text-muted">
                                    This will be your username
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button type="submit">Sign Up</Button>

                            <Form.Text>Already have an account?</Form.Text>
                            <Button
                                type="button"
                            ><a href="/login" style={{ color: "white"}}>Login here!</a></Button>
                        </Form>
                        {message ? <Message message={message}/> : null}
                    </Jumbotron>
            </Container>
        </div >
    ); 
};

export default Welcome;