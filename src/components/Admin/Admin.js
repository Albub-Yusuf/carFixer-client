import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Spinner } from 'react-bootstrap';
import { faEdit, faTrash, faPlus, faSms, faTools, faListUl, faComments, faUserPlus, faThList, faHome, faHammer, faLo, faCartPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HiddenNav from '../HiddenNav/HiddenNav';
import SideNav from '../SideNav/SideNav';
import { Link } from 'react-router-dom';
import './Admin.css';


const Admin = () => {


    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [deleteSpinner, setDeleteSpinner] = useState(null);
    const [admins, setAdmins] = useState([]);
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [sms, setSms] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const [isAdmin, setIsAdmin] = useState(null);





    const url = `https://evening-shore-59266.herokuapp.com/services`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));


        //reviews

        fetch('https://evening-shore-59266.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))


        //orders
        fetch('https://evening-shore-59266.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

        //userOrders
        fetch(`https://evening-shore-59266.herokuapp.com/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))



        //adminCheck
        fetch(`https://evening-shore-59266.herokuapp.com/admins/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data[0]);
            })


    }, [])


    const deleteBook = (id) => {

        alert(id);

        const url = `https://evening-shore-59266.herokuapp.com/delete/${id}`;


        setDeleteSpinner(1);
        // DELETE request using fetch with error handling
        fetch(url, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();

                setDeleteSpinner(null);

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                if (response.ok) {

                    alert('Service deleted successfully!!!');

                    setDeleteSpinner(null);
                }
            })
            .catch(error => {
                //setErrorMessage(error);
                console.error('There was an error!', error);
                setDeleteSpinner(null);

            });


    }

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="Adminwrapper">

                {/* SideNav */}
                <div className="side-nav-section"><SideNav></SideNav></div>
                <div className="content">

                    {/* Hidden Nav */}
                    <div className="hiddenNavAdmin">
                        <HiddenNav></HiddenNav>
                    </div>

                    {/* Top panel */}
                    <div className="topPanel">
                        <h3>Dashboard</h3>
                        {
                            deleteSpinner &&

                            <div className="flex-center">
                                <Spinner className="spinner-center" animation="grow" role="status" variant="warning">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                <span style={{ color: 'red' }}>Deleting...</span>
                            </div>

                        }
                    </div>

                    <div className="mainPanel" style={{ minHeight: '80vh' }}>


                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>


                            {
                                isAdmin ?

                                    <div className="flex-center" style={{ width: '100%', flexWrap: 'wrap' }}>
                                        <div className="dashboard-info-card">
                                            <div className="dashboard-info-card-top">
                                                <div>
                                                    <h1><FontAwesomeIcon icon={faTools} /></h1>
                                                </div>
                                                <div>
                                                    <div style={{ padding: '10px' }}><h1>{services.length}</h1></div>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5><strong>Total Services</strong></h5>
                                            </div>
                                        </div>





                                        <div className="dashboard-info-card">
                                            <div className="dashboard-info-card-top">
                                                <div>
                                                    <h1><FontAwesomeIcon icon={faListUl} /></h1>
                                                </div>
                                                <div>
                                                    <div style={{ padding: '10px' }}><h1>{orders.length}</h1></div>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5><strong>Total Orders</strong></h5>
                                            </div>
                                        </div>




                                        <div className="dashboard-info-card">
                                            <div className="dashboard-info-card-top">
                                                <div>
                                                    <h1><FontAwesomeIcon icon={faComments} /></h1>
                                                </div>
                                                <div>
                                                    <div style={{ padding: '10px' }}><h1>{reviews.length}</h1></div>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5><strong>Total Reviews</strong></h5>
                                            </div>
                                        </div>





                                        <div className="dashboard-info-card">
                                            <div className="dashboard-info-card-top">
                                                <div>
                                                    <h1><FontAwesomeIcon icon={faCartPlus} /></h1>
                                                </div>
                                                <div>
                                                    <div style={{ padding: '10px' }}><h1>{userOrders.length}</h1></div>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5><strong>My orders</strong></h5>
                                            </div>
                                        </div>

                                    </div>


                                    :



                                    <div className="dashboard-info-card">
                                        <div className="dashboard-info-card-top" style={{ justifyContent: 'space-between' }}>
                                            <div>
                                                <h1><FontAwesomeIcon icon={faCartPlus} /></h1>
                                            </div>
                                            <div>
                                                <div style={{ padding: '10px' }}><h1>{userOrders.length}</h1></div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <Link to="/order"><h5><strong>My orders</strong></h5></Link>
                                        </div>
                                    </div>



                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;