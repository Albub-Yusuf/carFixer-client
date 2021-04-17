import React, { useContext, useEffect, useState } from 'react';
import HiddenNav from '../../HiddenNav/HiddenNav';
import SideNav from '../../SideNav/SideNav';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container,Button } from 'react-bootstrap';
import { AuthContext } from '../../../App';
import { useForm } from "react-hook-form";

const AllOrders = () => {


    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const status = [
        {sid:1,status:"pending"},
        {sid:2,status:"ongoing"},
        {sid:3,status:"completed"},
    ];

    let serial = 0;



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    const url = `https://evening-shore-59266.herokuapp.com/orders/`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);

   


    const changeStatus = (id, status) => {

     //   alert(id, status);
        console.log(id, status);

        
       
        const updatedOrder = { id, status };



        fetch(`https://evening-shore-59266.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   alert('status updated...')
                }
            })


    }



    return (
        <div>
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
                        <h3>Order List</h3>
                    </div>


                    <div className="mainPanel">


                        <Container>
                            <br></br>
                            <h2>Orders</h2>

                            <div className="tableSecondaryStyle">

                                <div>
                                    <Table responsive="sm">
                                        <thead>

                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email ID</th>
                                                <th>Service</th>
                                                <th>Pay With</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                orders.slice(0).reverse().map(order => <tr key={order._id}>
                                                    <td>{serial = serial + 1}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.service}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.status}</td>
                                                    <td>
                                                        <div>

                                                          

                                     
                                                              
                                                                <Button variant="danger" size="sm" onClick={() => changeStatus(order._id, 'pending')}>pending</Button>
                                                                <Button variant="warning" size="sm" onClick={() => changeStatus(order._id, 'ongoing')}>ongoing</Button>
                                                                <Button variant="success" size="sm" onClick={() => changeStatus(order._id, 'completed')}>completed</Button>

                                                                



                                                                


                                                        </div>

                                                    </td>

                                                </tr>)
                                            }



                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                        </Container>


                    </div>

                    <div className="bottomPanel">




                    </div>




                </div>
            </div>
        </div>
    );
};

export default AllOrders;