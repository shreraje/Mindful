import React, { Component, useEffect, useState } from 'react';
import Navbar from '../components/Navbars/Navbar';
import Footer from '../components/Footer/Footer';
// import axios from 'axios';
import API from '../Axios/apiCalls';
import axios from 'axios'
import '../App.css'
import { Jumbotron, Container, Form , Button, Popover, OverlayTrigger, Card } from 'react-bootstrap'
import 'materialize-css';
import { Tab, Tabs } from 'react-materialize';


const workoutPopover = (

    <Popover id = "popover-basic">
        <Popover.Title as="h3">Exercise Categories</Popover.Title>
        <Popover.Content>
            <p>
                There are four categories of Exercise: Endurance, Strength, Flexibility, and Balance.
            </p>
            <br/>
            <p>
                Endurance exercises increase your breathing and heart rate. Some examples of this are jogging, swimming, playing tennis, and even yard work!
            </p>
            <br/>
            <p>
                Strength exercises build muscle. You can do this by lifting weights or using resistance bands.
            </p>
            <br/>
            <p>
                Flexibility exercises stretch your muscles and make you limber. Common exercises include muscle stretches, and our personal favorite: yoga!
            </p>
            <br/>
            <p>
                Balance exercises are normally practiced by older folks. They help older adults stay independent. You can practice these by standing on one foot, sitting and standing without using your hands, or even just walking heel to toe in a straight line.
            </p>
            <br/>
            

        </Popover.Content>
    </Popover>
)

const meditationPopover = (
    <Popover id="popover-basic">
        <Popover.Title>Meditation Types</Popover.Title>
        <Popover.Content>
            <p>
                There are 9 types of meditation: mindfulness, spiritual, focused, movement, mantra, transcendental, progressive, loving-kindness, and visualization.
            </p>

            <p>
                Mindfulness: the process of paying attention to thoughts as they pass through your mind.
            </p>
            <p>
                Spiritual: consists of reflecting on the silence around you and seeking a deeper connection with your God or the Universe.
            </p>
            <p>
                Focused: involves concentrating on your five senses, focusing that the feelings that surround them.
            </p>
            <p>
                Movement: practiced by letting movement guide your meditation in a gentle form such as yoga or walking.
            </p>
            <p>
                Mantra: practiced by repeating a phrase or 'mantra' that uses a repitative sound to clear the mind.
            </p>
            <p>
                Transcendental: like mantra meditation, except instead of a single word, you use a series of words that are specefic to you.
            </p>
            <p>
                Progressive Relaxation: involves slowly tightening and relaxing targeted muscle groups throughout the body.
            </p>
            <p>
                Loving-Kindness: used to strengthen feeling of compassion, kindness, and acceptance toward yourself, or others.
            </p>
            <p>
                Visualization: a technique focused on enhancing feelings of peace by visualizing positive scenes or images.
            </p>
        </Popover.Content>
    </Popover>
)

// const api = axios.create({
//     baseURL: 'http://localhost:5000'
// });


class Workout extends React.Component {

    constructor(props) {
        super(props) 
            this.handleExerciseChangeType = this.handleExerciseChangeType.bind(this);
            this.handleExerciseChangeName = this.handleExerciseChangeName.bind(this);
            this.handleExerciseChangeDuration = this.handleExerciseChangeDuration.bind(this);

            this.state = {
                exercises: {
                    type: "",
                    name: "",
                    duration: ""
                },
                meditations: {
                    type: "",
                    name: "",
                    duration: ""
                },
                text: "",
                responseData: {}
            }

    }

    handleExerciseChangeType = event => {
        const value = event.target.value;
        console.log(this.state.exercises)

        this.setState((state) => {
            return {
                exercises: Object.assign({}, 
                    state.exercises, {
                        type: value
                    })
            }
        })
    }

    handleExerciseChangeName = event => {
        const value = event.target.value;
        console.log(this.state.exercises)


        this.setState((state) => {
            return {
                exercises: Object.assign({}, 
                    state.exercises, {
                        name: value
                    })
            }
        })
    }

    handleExerciseChangeDuration = event => {
        const value = event.target.value;
        console.log(this.state.exercises)


        this.setState((state) => {
            return {
                exercises: Object.assign({}, 
                    state.exercises, {
                        duration: value
                    })
            }
        })
    }

    handleMeditationChangeType = event => {
        const value = event.target.value;
        console.log(this.state.exercises)


        this.setState((state) => {
            return {
                meditations: Object.assign({}, 
                    state.meditations, {
                        type: value
                    })
            }
        })
    }

    handleMeditationChangeName = event => {
        const value = event.target.value;
        console.log(this.state.exercises)


        this.setState((state) => {
            return {
                meditations: Object.assign({}, 
                    state.meditations, {
                        name: value
                    })
            }
        })
    }

    handleMeditationChangeDuration = event => {
        const value = event.target.value;
        console.log(this.state.exercises)


        this.setState((state) => {
            return {
                meditations: Object.assign({}, 
                    state.meditations, {
                        duration: value
                    })
            }
        })
    }

    handleJournalChange = event => {
        this.setState({ text: event.target.value})
        console.log(this.state.text)
    }

    handleExerciseSubmit = event => {
        event.preventDefault();
        const exerciseData = {
            exercises: {
                type: this.state.exercises.type,
                name: this.state.exercises.name,
                duration: this.state.exercises.duration
            }
        }
        console.log(exerciseData)
        API.postWorkouts(exerciseData)
    }

    handleMeditationSubmit = event => {
        event.preventDefault();
        const meditationData = {
            meditation: {
                type: this.state.meditations.type,
                name: this.state.meditations.name,
                duration: this.state.meditations.duration
            }
        }
        API.postWorkouts(meditationData)
        console.log(meditationData);
    }

    handleJournalSubmit = event => {
        event.preventDefault();
        const journalData = {
            text: this.state.text
        }
        API.postWorkouts(journalData)
        console.log(journalData);
    }

    componentDidMount() {
        let exerciseData = [];
        axios.get('/api/workouts/workouts')
            .then(res => {
                console.log(res);
                // exerciseData = res.data.map((apiData) => {
                    
                //         console.log(apiData)
                    
                // })
                // this.setState({responseData: exerciseData});
            })
            .catch(err => console.log(err))
    }

    render() {
        
        console.log(this.state)
            return(
                <div>
                    <Navbar/>
                    <Container>
                        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
                            <Tab options={{
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                                }}
                                title="Progress">
                                <Jumbotron id="jumbo">
                                        <h3>Welcome to Your Workout/Meditation Tracker!</h3>
                                        <hr/>
                                        <p>Exercise is a vital component to leading a long and healthy life. This tool can be used to track your progress as well as document your workout/meditation progression.</p>
                                        <br/>
                                        <h3 style={{textAlign: 'center'}}>Your Progress</h3>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Exercise</Card.Title>
                                                <hr/>
                                                <Card.Text>History: </Card.Text>
                                                <Card.Text>Total Exercise Duration: </Card.Text>
                                            </Card.Body>
                                        </Card>
        
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Meditation</Card.Title>
                                                <hr/>
                                                <Card.Text>History: </Card.Text>
                                                <Card.Text>Meditation Duration:  </Card.Text>
                                            </Card.Body>
                                        </Card>
        
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Wellness Journal</Card.Title>
                                                <hr/>
                                                <Card.Text></Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Jumbotron>
                            </Tab>
                            <Tab options={{
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                                }} title="Workout Tracker">
                                <Jumbotron id="jumbo">
                                    <h3>Workout Tracker</h3>
                                    <hr/>
                                    
        
                                    <Form.Group>
                                        <Form>
                                            <Form.Label>Exercise Category</Form.Label>
                                            <Form.Control as="select" id="workout-category" name="type" value={this.state.exercises.type} onChange={this.handleExerciseChangeType}>
                                                <option value="Endurance">Endurance</option>
                                                <option value="Strength">Strength</option>
                                                <option value="Flexibility">Flexibility</option>
                                                <option value="Balance">Balance</option>
                                            </Form.Control>
                                            <br/>
                                            <OverlayTrigger trigger="hover" placement="right" overlay={workoutPopover}>
                                                <Button variant="outline-secondary" id="info-button">?</Button>
                                            </OverlayTrigger>
                                            <br/>
                                            
                                        </Form>
                                        <Form>
                                            <Form.Label>Workout Name</Form.Label>
                                            <Form.Control as="textarea"  name="name" onChange={this.handleExerciseChangeName} value={this.state.exercises.name}/>
                                        </Form>
                                        <Form>
                                            <Form.Label>Workout Duration in Minutes</Form.Label>
                                            <Form.Control as="textarea" name="duration" onChange={this.handleExerciseChangeDuration} value={this.state.exercises.duration}/>
                                            <br/>
        
                                            <Button onClick={this.handleExerciseSubmit}>Submit</Button>
                                        </Form>
                                    </Form.Group>
        
                                </Jumbotron>
                            </Tab>
                            <Tab options={{
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                                }} title="Meditation Tracker">
                                <Jumbotron id="jumbo">
                                    <h3>Meditation Tracker</h3>
                                    <hr/>
                                    <p>Physical exercise is important, but something else that is just as important is mental exercise! Use this tracker here to keep track of your meditation sessions!</p>
                                    <Form.Group>
                                        <Form>
        
                                            <Form.Label>Meditation Type</Form.Label>
                                            <Form.Control as="select" value={this.state.meditations.type} onChange={this.handleMeditationChangeType}>
                                                <option value="Mindfulness">Mindfulness</option>
                                                <option value="Spiritual">Spiritual</option>
                                                <option value="Focused">Focused</option>
                                                <option value="Movement">Movement</option>
                                                <option value="Mantra">Mantra</option>
                                                <option value="Transcendental">Transcendental</option>
                                                <option value="Progressive">Progressive</option>
                                                <option value="Loving-Kindness">Loving-Kindness</option>
                                                <option value="Visualization">Visualization</option>
                                            </Form.Control>
                                            <br/>
                                            <OverlayTrigger  trigger="hover" placement="right" overlay={meditationPopover}>
                                                <Button variant="outline-secondary" id="info-button">?</Button>
                                            </OverlayTrigger>
                                        </Form>
                                            <br/>
                                        <Form>
                                            <Form.Label>Meditation Name</Form.Label>
                                            <Form.Control as="textarea" name="name" onChange={this.handleMeditationChangeName} value={this.state.meditations.name}/>
                                        </Form>
                                            <br/>
                                        <Form>
                                            <Form.Label>Meditation Duration in Minutes</Form.Label>
                                            <Form.Control as="textarea" name="duration" onChange={this.handleMeditationChangeDuration} value={this.state.meditations.duration} />
                                            <br/>
        
                                            <Button onClick={this.handleMeditationSubmit}>Submit</Button>
                                            
                                        </Form>
                                    </Form.Group>
                                </Jumbotron>
                            </Tab>
                            <Tab options={{
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                                }} title="Journal">
                                <Jumbotron id="jumbo">
                                    <h3>Wellness Journal</h3>
                                    <hr/>
                                    <p>It's important to keep track of your wellness. This journal here is just for that. Write about how you've felt after each exercise or meditation session you've completed!</p>
                                    <Form.Group>
                                        <Form onSubmit={this.handleJournalSubmit}>
                                            <Form.Label>Wellness Journal</Form.Label>
                                            <Form.Control as="textarea" name="text" onChange={this.handleJournalChange} value={this.state.text} rows={8}/>
                                            <br/>
                                            <Button type="submit">Submit</Button>
        
                                        </Form>
                                    </Form.Group>
                                </Jumbotron>
                            </Tab>
                        </Tabs>
                    </Container>
        
                    <Footer/>
                </div>
            );
    }
    };

export default Workout;