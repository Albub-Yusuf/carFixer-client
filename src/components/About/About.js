import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import mechanic from '../../images/abt.jpg'

const About = () => {
    return (
        <section>
            <Container>
                <br></br><br></br>
                <h2 className="about-heading"><strong><span className="dark">About</span> <span className="prime">us</span></strong></h2>
                <br></br><br></br>
                <Row mt-5 pt-5>
                    <br></br>
                    <Col mt-5 pt-5 md={6} sm={6} xs={12} d-flex style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img classname="image" style={{ width: '350px', borderRadius: '10px', padding: '10px' }} src={mechanic}></img>
                    </Col>

                    <Col md={6} sm={6} xs={12} className="about-text-wrapper">
                        <div className="about-text">
                            <p>Our service center offers a comprehensive approach to the maintenance of the car, as a result of which you will be given an objective assessment of the condition of the car.</p>

                            <p>In addition, there is no need to go anywhere else, since every car enthusiast will find everything he needs! And since every modern person really appreciates his time, with our help he will be able to feel all the advantages of a qualitative and operational approach to car repair.</p>
                            <br></br>
                            <p>Our service center offers a comprehensive approach to the maintenance of the car, as a result of which you will be given an objective assessment of the condition of the car, as a result of which you will be given an objective assessment of the condition of the car, there is no need to go anywhere else, since every car enthusiast will find everything he needs!
                        </p>

                            <Button variant="danger">Read more...</Button>
                        </div>
                    </Col>

                </Row>
                <br /><br /><br />
            </Container>
        </section>
    );
};

export default About;