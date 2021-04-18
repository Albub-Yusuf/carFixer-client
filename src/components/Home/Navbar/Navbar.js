import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHammer } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [locations, setLocations] = useState(false);

    //navbar collapse toggle
    const handleNavToggle = () => {

        console.log('clicked');

        if (locations == false) {

            setLocations(true);

        }

        if (locations == true) {

            setLocations(false);

        }

    }

    const handleLogout = () => {


        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser(0);
        }).catch((error) => {
            // An error happened.
        });
    }



    return (
        <div>
            <div className="navBar">
                <h3 className="logo"><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon><span><strong> Car<sup style={{ color: 'crimson' }}> <b>fixer.  </b></sup></strong></span></h3>
                <nav className="nav-link-wrapper">
                    <ul className="nav__links">

                        <Link to="/home"><li><strong>Home</strong></li></Link>
                        <Link to="/home"><li><strong>About us</strong></li></Link>
                        <Link to="/order"><li><strong>Orders</strong></li></Link>
                        <Link to="/admin"><li><strong>Admin</strong></li></Link>
                    </ul>

                </nav>

                <div className="lognav">
                    <p>{loggedInUser.email ? <Button id="nav_logout" onClick={handleLogout} variant="danger" style={{ borderRadius: '20px', height: '40px', }}><strong>Logout</strong></Button> : <Link to="/login"> <Button id="nav_log" variant="danger" style={{ borderRadius: '20px', height: '40px', }}><strong>Login</strong></Button>&nbsp;</Link>}</p>

                </div>

                <div>
                    <span className="toggler"><FontAwesomeIcon icon={faBars} onClick={handleNavToggle}></FontAwesomeIcon> &nbsp;</span>

                </div>


            </div>


            {/* Collapsed navigation */}
            {
                locations && <div id="hidden-ui">
                    <div >
                        <p><Link to="/home" onClick={handleNavToggle}><strong>Home</strong></Link></p>
                        <p><Link to="/orders" onClick={handleNavToggle}><strong>Orders</strong></Link></p>
                        <p><Link to="/admin" onClick={handleNavToggle}><strong>Admin</strong></Link></p>
                        <p>{loggedInUser.email ? <Button id="nav_logout2" onClick={handleLogout} variant="danger" style={{ borderRadius: '20px', height: '40px', }}><strong>Logout</strong></Button> : <Link to="/login"> <Button id="nav_log" variant="danger" style={{ borderRadius: '20px', height: '40px', }}><strong>Login</strong></Button>&nbsp;</Link>}</p>

                    </div>
                </div>

            }
        </div>

    );
};

export default Navbar;