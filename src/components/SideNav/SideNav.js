import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { faEdit, faTrash, faPlus, faThList, faHome, faHammer, faLo, faCartPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideNav.css';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

const SideNav = () => {

    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null);
   


    useEffect(() => {

        fetch(`https://evening-shore-59266.herokuapp.com/admins/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {

            
                setIsAdmin(data[0]);
               
            })

    }, [])


    const handleLogout = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser(0);
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="sidebar">
            <div className="brandName">
                <h3 style={{ backgroundColor: 'transparent', textAlign: 'center', marginTop: '50px', color: '#333' }}><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon><span><strong> Car<sup style={{ color: 'crimson' }}> <b>fixer.  </b></sup></strong></span></h3>
            </div>
            <br></br>
            <div className="menus">
                <img src={loggedInUser.image} style={{ width: '40px', height: '40px', borderRadius: '50%' }} /> &nbsp;&nbsp;<span>{loggedInUser.name}</span>
            </div>
            <br></br>



            <br></br>



            {
               isAdmin  ?
                    <div>
                        <br></br>
                        <div className="menus">
                            <Link to="/order"><p><FontAwesomeIcon icon={faCartPlus} /> My Orders</p></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/orders"><p><FontAwesomeIcon icon={faThList} /> Orders list</p></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/manage-service"><p><FontAwesomeIcon icon={faThList} /> Manage Services</p></Link>
                        </div>
                        <br></br>

                        <div className="menus">
                            <Link to="/add"><p> <FontAwesomeIcon icon={faPlus} />  Add Service</p></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/addAdmin"><p><FontAwesomeIcon icon={faPlus} /> Create Admin</p></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/createReview"><p><FontAwesomeIcon icon={faThList} /> Add Review</p></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/query"><p><FontAwesomeIcon icon={faEnvelope} /> Client Message</p></Link>
                        </div>
                        <br></br>


                    </div>

                    :
                    <div>
                        <br></br>
                        <div className="menus">
                        <Link to="/order"><p><FontAwesomeIcon icon={faCartPlus} /> My Order list</p></Link>
                        </div>
                        <br></br>

                        <div className="menus">
                        <Link to="/createReview"><p><FontAwesomeIcon icon={faThList} /> Add Review</p></Link>

                        </div>
                        <br></br>
                    </div>


            }


            <div className="menus">
                <Link to="/home"><p><FontAwesomeIcon icon={faHome} /> Online Shop</p></Link>
            </div>
            <br></br>
            <div className="menus">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default SideNav;