import React, { useContext, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container } from 'react-bootstrap';
import { AuthContext, CartContext } from '../../App';
import SideNav from '../SideNav/SideNav';
import HiddenNav from '../HiddenNav/HiddenNav';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProcessPayment from './ProcessPayment/ProcessPayment';





const Checkout = () => {





    const [cartInfos, setCartInfos] = useContext(CartContext);

    const { id, title, details, price, image, } = cartInfos;
    console.log(cartInfos);

    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const userName = loggedInUser.name;


    const { register, watch, formState: { errors } } = useForm();
    const [spinnerdataUpload, setSpinnerdataUpload] = useState(null);
    const [visible, setVisible] = useState(0);


    const onSubmit = data => {

        console.log(data);
    }




    const proceedCheckout = () => {
        const newOrder = {
            user: userName,
            email: loggedInUser.email,
            service: title,
            details: details,
            price: price,
            image: image,
            status: 'pending',
            orderTime: new Date()

        }
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
                        <h3>Shipment info</h3>
                    </div>

                    {/* form */}
                    <div className="mainPanel">

                        <ProcessPayment></ProcessPayment>

                        {
                            spinnerdataUpload &&

                            <div className="uploadStatus">
                                <Spinner style={{ margin: '0px auto', textAlign: 'center' }} animation="grow" role="status" variant="warning">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                <span style={{ color: 'red' }}>Uploading...</span>
                            </div>

                        }

                    </div>

                    <div className="bottomPanel">




                    </div>




                </div>
            </div>
        </div>
        // </div>




    );
};

export default Checkout;