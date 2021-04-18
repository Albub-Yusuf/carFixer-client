import React from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHammer, faWrench, faCogs, faClock } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header>

            <div className="headerContainer">

                <Navbar></Navbar>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', background: 'rgba(0,0,0,.5)', }}>

                    <Container style={{marginBottom:'100px'}}>

                        <div style={{ color: 'white', width: '50%', textAlign: 'left', padding: '20px' }}>

                            <span style={{ fontSize: '48px' }}><strong>Professional <span style={{color:'white'}}>repairing</span></strong></span>
                            <span style={{width:'100%'}}><p>The largest autotechnical center in 2350 cities with modern equipment and qualified personnel.</p>
</span>
                            <br />
                            <br></br>
                            <Button variant="danger" style={{ borderRadius: '5px', height:'40px' }}><b>Check now</b></Button>

                        </div>


                    </Container>

                </div>



            </div>
            <Container style={{marginBottom:'100px'}}>
                <div style={{ minHeight: '150px', margin: '-85px auto', padding: '10px', textAlign: 'center', }}>
                    <Row>
                        <Col xs={12} md={4} sm={12} mt-5>
                            <div style={{ background: '#ccc', marginRight: '10px', padding: '10px', background: 'crimson', color: '#fff', borderRadius: '5px' }}>
                                <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
                                <h3><strong>Repair Services</strong></h3>
                                <p><small><b>We can repair any vehicle.Just contact us</b></small></p>
                            </div>

                        </Col>
                        <Col xs={12} md={4} sm={12} mt-5>
                            <div style={{ background: '#ccc', marginRight: '10px', padding: '10px', background: 'crimson', color: '#fff', borderRadius: '5px' }}>
                                <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                                <h3><strong>Car Tuning Service</strong></h3>
                                <p><small><b>Get your car a new classy look.</b></small></p>
                            </div>

                        </Col>
                        <Col xs={12} md={4} sm={12} mt-5>
                            <div style={{ background: '#ccc', marginRight: '10px', padding: '10px', background: 'crimson', color: '#fff', borderRadius: '5px' }}>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <h3><strong>Working Hours</strong></h3>
                                <p><small><b>SAT-THU - 9:30AM to 8:00PM</b></small></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
        

    );
};

export default Header;