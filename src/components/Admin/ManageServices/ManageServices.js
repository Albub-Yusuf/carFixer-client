import React, { useContext, useEffect, useState } from 'react';
import HiddenNav from '../../HiddenNav/HiddenNav';
import SideNav from '../../SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Spinner } from 'react-bootstrap';
import { faEdit, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../../App';

const ManageServices = () => {

    
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [deleteSpinner, setDeleteSpinner] = useState(null);
    let serial=0;

    const url = `https://evening-shore-59266.herokuapp.com/services`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])


    const deleteService = (id) => {

     

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
        
        <div style={{overflowX:'hidden'}}>
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
                    <h3>Manage Services</h3>
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


                    <Container fluid>
          
                        <h2>Service List</h2>
                        
                        <div className="table-wrapper">
                            <div>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Services</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            services.slice(0).reverse().map(service => <tr key={service._id}>

                                                <td>{serial = serial + 1}</td>
                                                <td>{service.title}</td>
                                                <td>{service.price}/-</td>
                                                <td>
                                                    <span><FontAwesomeIcon icon={faEdit} />  &nbsp;</span> 
                                                     <span style={{ cursor: 'pointer' }} onClick={() => deleteService(service._id)}><FontAwesomeIcon icon={faTrash} /> &nbsp;</span> &nbsp;&nbsp;
                                                </td>
                                                <td>
                                                    
                                                </td>

                                            </tr>)
                                        }

                                    </tbody>
                                </Table>
                            </div>

                        </div>

                    </Container> 

                </div>

            </div>
        </div>
    </div>
    );
};

export default ManageServices;