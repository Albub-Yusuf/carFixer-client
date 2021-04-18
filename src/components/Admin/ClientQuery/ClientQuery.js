import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../App';
import HiddenNav from '../../HiddenNav/HiddenNav';
import SideNav from '../../SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Spinner } from 'react-bootstrap';

const ClientQuery = () => {

    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [query, setQuery] = useState([]);
    const [deleteSpinner, setDeleteSpinner] = useState(null);
    let serial = 0;

    const url = `https://evening-shore-59266.herokuapp.com/quotation`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setQuery(data));

    }, [])



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
                        <h3>Show Customer Message</h3>
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

                    <div className="mainPanel">

                        <Container fluid>

                            <h2>Customer Message</h2>

                            <div className="table-wrapper">
                                <div>
                                    <Table responsive="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                query.slice(0).reverse().map(msg => <tr key={msg._id}>
                                                    <td>{serial = serial + 1}</td>
                                                    <td>{msg.name}</td>
                                                    <td>{msg.email}</td>
                                                    <td>
                                                        {msg.message}
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

export default ClientQuery;