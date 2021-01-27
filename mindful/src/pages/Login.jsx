import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Message from '../components/Message';
import Navbar from '../components/Navbars/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    //Handle change to form inputs
    const handleInputChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    //Hanlde for submission
    const handleFormSubmit = event => {
        event.preventDefault();
        AuthService.login(user).then(data => {
             console.log(data);
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/homepage');
            } else {
                setMessage(message);
            }
        });
    };
        
    return (
        <div>
            <Navbar/>
            <Container>
                    <Jumbotron className="jumbo-background">
                        <h1 style={{ textAlign: "center" }}>Welcome to Mindful - Login below</h1>
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
                                    We'll never share your email with anyone else.
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
                            <Button variant="info" type="submit">Login</Button>
                        </Form>
                        {message ? <Message message={message}/> : null}
                    </Jumbotron>
            </Container>
        </div >
    );
};

export default Login;