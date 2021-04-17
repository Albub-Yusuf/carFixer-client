import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Spinner } from 'react-bootstrap';
import { faEdit, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HiddenNav from '../HiddenNav/HiddenNav';
import SideNav from '../SideNav/SideNav';
import { Link } from 'react-router-dom';
import './Admin.css';


const Admin = () => {

   
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [deleteSpinner, setDeleteSpinner] = useState(null);

    const url = `https://evening-shore-59266.herokuapp.com/services`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));

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
            <div  style={{overflowX:'hidden'}}>
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

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Spinner style={{ margin: '0px auto', textAlign: 'center' }} animation="grow" role="status" variant="warning">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                <span style={{ color: 'red' }}>Deleting...</span>
                            </div>

                        }
                    </div>

                    <div className="mainPanel">


                    </div>
    
                </div>
            </div>
        </div>
    );
};

export default Admin;