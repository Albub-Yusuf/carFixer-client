import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHammer } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className="navBar">

            {/* <img className="logo" src={logo} alt=""/> */}
            <h3 className="logo"><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon><span><strong> Car<sup style={{ color: 'crimson' }}> <b>fixer.  </b></sup></strong></span></h3>
            <nav>
                <ul className="nav__links">

                    <Link to="/home"><li><strong>Home</strong></li></Link>
                    <Link to="/home"><li><strong>About us</strong></li></Link>
                    <Link to="/order"><li><strong>Order</strong></li></Link>
                    <Link to="/admin"><li><strong>Admin</strong></li></Link>
                </ul>

            </nav>

            <div>
               <Link to="/login"> <Button variant="danger" style={{ borderRadius: '20px', height: '40px', width: '100px' }}><strong>Login</strong></Button>&nbsp; <span className="toggler"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon> &nbsp;</span></Link>
            </div>



        </div>
    );
};

export default Navbar;