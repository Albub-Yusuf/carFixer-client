import React, { useContext, useEffect, useState } from 'react';
import { faEdit, faTrash, faPlus, faSms, faListUl, faComments, faUserPlus, faThList, faHome, faHammer, faLo, faCartPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './HiddenNav.css';
import { AuthContext } from '../../App';


const HiddenNav = () => {


    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null);


    useEffect(() => {

        fetch(`https://evening-shore-59266.herokuapp.com/admins/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {


                setIsAdmin(data[0]);

            })

    }, [])


    return (
        <div className="hidden-wrapper">

            <div className="hidden-brand">
                <div className="brandName">
                    <h3><strong>Car fixer.</strong></h3>
                </div>

            </div>




            {
                isAdmin ?
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <br></br>
                        <div className="menus">
                            <Link to="/order"><FontAwesomeIcon icon={faCartPlus} /></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/orders"><FontAwesomeIcon icon={faThList} /></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/manage-service"><FontAwesomeIcon icon={faListUl} /></Link>
                        </div>
                        <br></br>

                        <div className="menus">
                            <Link to="/add"><FontAwesomeIcon icon={faPlus} /></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/addAdmin"><FontAwesomeIcon icon={faUserPlus} /></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/createReview"><FontAwesomeIcon icon={faComments} /></Link>
                        </div>
                        <br></br>
                        <div className="menus">
                            <Link to="/query"><FontAwesomeIcon icon={faSms} /></Link>
                        </div>
                        <br></br>


                    </div>

                    :
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <br></br>
                        <div className="menus">
                            <Link to="/order"><FontAwesomeIcon icon={faCartPlus} /></Link>
                        </div>
                        <br></br>

                        <div className="menus">
                            <Link to="/createReview"><FontAwesomeIcon icon={faComments} /></Link>

                        </div>
                        <br></br>
                    </div>


            }
            <div className="menus">
                <Link to="/home"><FontAwesomeIcon icon={faHome} /></Link>
            </div>
            <br></br>
        </div>
    );
};

export default HiddenNav;