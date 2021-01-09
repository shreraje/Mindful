import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import Footer from '../components/Footer/Footer';
import '../App.css'
import { Jumbotron, Container, Form , Button, Popover, OverlayTrigger, Card, Tabs, Tab } from 'react-bootstrap'

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

function Workout() {
    return(
        <div>
            <Navbar/>
            <Container>
                <Tabs defaultActiveKey="progress">
                    <Tab eventKey="progress" title="Progress">
                        <Jumbotron>
                                <h3>Welcome to Your Workout/Meditation Tracker!</h3>
                                <hr/>
                                <p>Exercise is a vital component to leading a long and healthy life. This tool can be used to track your progress as well as document your workout/meditation progression.</p>
                                <br/>
                                <Card>
                                    <Card.Title style={{textAlign: 'center'}}>Your Progress</Card.Title>
                                    <hr/>
                                    <Card.Text>Exercise History: </Card.Text>
                                    <Card.Text>Total Exercise Duration: </Card.Text>
                                    <hr/>
                                    <Card.Text>Meditation History: </Card.Text>
                                    <Card.Text>Total Meditation Duration: </Card.Text>
                                    <hr/>
                                    <Card.Text>Journal Entries: </Card.Text>
                                </Card>
                            </Jumbotron>
                    </Tab>
                    <Tab eventKey="workout" title="Workout Tracker">
                    <Jumbotron>
                            <h3>Workout Tracker</h3>
                            <hr/>
                            

                            <Form.Group>
                                <Form>
                                    <Form.Label>Exercise Category</Form.Label>
                                    <Form.Control as="select">
                                        <option>Endurance</option>
                                        <option>Strength</option>
                                        <option>Flexibility</option>
                                        <option>Balance</option>
                                    </Form.Control>
                                    <br/>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={workoutPopover}>
                                        <Button variant="outline-secondary" id="info-button">?</Button>
                                    </OverlayTrigger>
                                    <br/>
                                    
                                </Form>
                                <Form>
                                    <Form.Label>Workout Name</Form.Label>
                                    <Form.Control as="textarea"/>
                                </Form>
                                <Form>
                                    <Form.Label>Workout Duration</Form.Label>
                                    <Form.Control as="textarea"/>
                                    <br/>

                                    <Button>Submit</Button>
                                </Form>
                            </Form.Group>

                        </Jumbotron>
                    </Tab>
                    <Tab eventKey="meditation" title="Meditation Tracker">
                    <Jumbotron>
                            <h3>Meditation Tracker</h3>
                            <hr/>
                            <p>Physical exercise is important, but something else that is just as important is mental exercise! Use this tracker here to keep track of your meditation sessions!</p>
                            <Form.Group>
                                <Form>

                                    <Form.Label>Meditation Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Mindfulness</option>
                                        <option>Spiritual</option>
                                        <option>Focused</option>
                                        <option>Movement</option>
                                        <option>Mantra</option>
                                        <option>Transcendental</option>
                                        <option>Progressive</option>
                                        <option>Loving-Kindness</option>
                                        <option>Visualization</option>
                                    </Form.Control>
                                    <br/>
                                    <OverlayTrigger  trigger="hover" placement="right" overlay={meditationPopover}>
                                        <Button variant="outline-secondary" id="info-button">?</Button>
                                    </OverlayTrigger>
                                </Form>
                                    <br/>
                                
                                <Form>
                                    <Form.Label>Meditation Duration</Form.Label>
                                    <Form.Control as="textarea" />
                                    <br/>

                                    <Button>Submit</Button>
                                    
                                </Form>
                            </Form.Group>
                        </Jumbotron>
                    </Tab>
                    <Tab eventKey="journal" title="Journal">
                    <Jumbotron>
                            <h3>Wellness Journal</h3>
                            <hr/>
                            <Form.Group>
                                <Form>
                                    <Form.Label>Wellness Journal</Form.Label>
                                    <Form.Control as="textarea" rows={8}/>
                                    <br/>
                                    <Button>Submit</Button>

                                </Form>
                            </Form.Group>
                        </Jumbotron>
                    </Tab>
                </Tabs>
            </Container>

            <Footer/>
        </div>
    );
};

export default Workout;