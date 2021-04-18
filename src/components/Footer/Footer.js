import React from 'react';
import './Footer.css';
import logo from '../../images/flogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHammer } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id="footer-container">


            <div className="ftr">

                <h3 className="logo"><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon><span><strong> Car<sup style={{ color: 'crimson' }}> <b>fixer.  </b></sup></strong></span></h3>
                <nav>
                    <ul className="nav__links">

                        <li>About Car fixer</li>
                        <li>Book Appointment</li>
                        <li>Get Quote</li>


                    </ul>

                </nav>
            </div>



            {/*  */}


            <div style={{ textAlign: 'center' }}><p>Copyright @2021 Car fixer</p></div>

        </div>
    );
};

export default Footer;