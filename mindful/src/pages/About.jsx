import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import { CardDeck, Card, Col, Row, Jumbotron, Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';

function About() {
    return(
        <div>
            <Navbar/>
            <Jumbotron fluid>

            <Card>
                <Card.Header>Mindful</Card.Header>
                <Card.Body>
                <Card.Title>What is the purpose of Mindful?</Card.Title>
                <Card.Text>
                    Mindful came from an idea of the need for peace, meditation, and a way to track that. Life gets stressful, 
                    life gets hard. We know that as each and every one of us has our own thing we deal with, our own demons if you will. 
                    The purpose of Mindful is to have a multitiude of reasources, though not overwhelming amount, to deal with your own personal demons. 
                    Through our application you can use video guides, find breathing excersises, and have the ability to track all that you have done. 
                    We believe that through our application you will be able to find personal peace. Thank you, and if you would like to ask any
                    questions use the button to get our contact information!
                </Card.Text>
                <Button href="mindful\src\pages\Contact.jsx">Go to contact page!</Button>
                </Card.Body>
            </Card>
                
            </Jumbotron>
            <Footer/>
        </div>
    );
};

export default About;