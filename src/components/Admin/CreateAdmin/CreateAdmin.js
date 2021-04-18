import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import HiddenNav from '../../HiddenNav/HiddenNav';
import SideNav from '../../SideNav/SideNav';

const CreateAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [spinnerdataUpload, setSpinnerdataUpload] = useState(null);
    const [visible, setVisible] = useState(0);



    //Store data to database
    const onSubmit = data => {



        const adminInfo = {
            email: data.email
        }

        setSpinnerdataUpload(1);
        console.log(adminInfo);
        fetch('https://evening-shore-59266.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res => {
                setVisible(0);
                setSpinnerdataUpload(null);
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
                        <h3>Create Admin</h3>
                    </div>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mainPanel">

                            <div className="group-field" >
                                <div className="input-wrapper">
                                    <label><strong>Email</strong></label><br />
                                    <input className="inputStyle" style={{ width: '40vw' }} placeholder="Add email here..."  {...register("email", { required: true })} />
                                    <input className="btn-prime" type="submit" value="Create" />
                                    <br/>
                                    {errors.email && <span style={{color:'red'}}> **This field is required</span>}

                                </div>
                            </div>



                            {
                                spinnerdataUpload &&

                                <div className="uploadStatus">
                                    <Spinner className="spinner-center" animation="grow" role="status" variant="warning">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                    <span style={{ color: 'red' }}>Uploading...</span>
                                </div>

                            }

                        </div>

                        <div className="bottomPanel">


                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;