import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'react-bootstrap';

import './MyOrders.css';
import HiddenNav from '../HiddenNav/HiddenNav';
import SideNav from '../SideNav/SideNav';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrders = () => {


    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `https://evening-shore-59266.herokuapp.com/orders/${loggedInUser.email}`;


    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])




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
                        <h3>Order list</h3>
                    </div>


                    <div className="mainPanel">


                        <Container>
                            <br></br>


                            <div className="tableSecondaryStyle">

                                <div className="flex-center" style={{ flexWrap: 'wrap' }}>

                                    {
                                        orders.slice(0).reverse().map(order => <MyOrderCard key={order._id} order={order}></MyOrderCard>)


                                    }
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

export default MyOrders;