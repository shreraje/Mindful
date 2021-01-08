import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './BreathingIntro.css';

const BreathingIntro = () => {
    return(
        <Row>
            <Col>
                <div className="intro-container">
                    <header className="intro-header">Box Breathing: You try it!</header>
                    <hr></hr>
                    <p className="intro-text">Box breathing is a technique that allows practitioners to heighten concentration and performance
                        while simaltaneously acting as a powerful stress reliever. This technique has proven benefits
                        and is commonly used by athletes, military members, police officers, and even those who suffer
                        from lung diseases such as chronic obstructive pulmonary disease (COPD). To perform this exercise, sit
                        upright and slowly exhale through your mouth pushing all the air out of your lungs. Inhale through
                        your nose for a count of 4 seconds and hold for another 4 seconds. Slowly release that breath in
                        another 4 second count and finally conclude with another 4 second hold on empty lungs. Press the
                        start button below and match your breaths to the expansion and contraction of the circle. Repeat
                        this exercise for a recommended time of 5 minutes and take note of the effects you experience!
                    </p>
                </div>
            </Col>
        </Row>
    );
};

const BreathingPractices = (props) => {
    return(
        <Col sm={12} md={6} lg={6} xl={6} className="practice-col">
            <div className="practice-container">
                <header className="practice-header" key={props.id}>{props.title}</header>
                <hr></hr>
                <p className="practice-text">{props.desc}</p>
                <ul className="steps">
                    {props.steps.map(step => {
                        return(
                            <li>{step}</li>
                        )
                    })
                    }
                </ul>
            </div>
        </Col>
    );
};

export { BreathingIntro, BreathingPractices };