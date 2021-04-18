import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import HiddenNav from '../../HiddenNav/HiddenNav';
import SideNav from '../../SideNav/SideNav';
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [status, setStatus] = useState(0);

    const [imageUrl, setImageUrl] = useState(null);

    const [visible, setVisible] = useState(0);

    const [spinner, setSpinner] = useState(null);

    const [spinnerdataUpload, setSpinnerdataUpload] = useState(null);

    //Store data to database
    const onSubmit = data => {

        if (status === 1) {

            const serviceInfo = {
                title: data.title,
                details: data.details,
                price: data.price,
                imageURL: imageUrl
            }

            setSpinnerdataUpload(1);
            console.log(serviceInfo);
            fetch('https://evening-shore-59266.herokuapp.com/addService', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceInfo)
            })
                .then(res => {
                    setVisible(0);
                    setStatus(0);
                    setSpinnerdataUpload(null);
                })

        } else {
            alert('Please wait until the image is uploaded, Thanks!')
        }

    }



    //image upload
    const handleImageUpload = (event) => {

        setSpinner(1);
        setVisible(1);
        const imageData = new FormData();
        imageData.set('key', 'd48b393f4f16b3633b01f37ce4e0c8b5');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(async function (response) {
                setImageUrl(response.data.data.display_url);
                await setStatus(1);
                setSpinner(null);
            })
            .catch(function (error) {
                console.log(error);
                alert(error, 'Please try again with different image')
            });

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
                        <h3>Add Service</h3>
                    </div>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mainPanel">

                            <div className="group-field" >
                                <div className="input-wrapper">
                                    <label><strong>Service Title</strong></label><br />
                                    <input className="inputStyle" placeholder="Service title"  {...register("title", { required: true })} />
                                    <br/>
                                    {errors.title && <span style={{color:'red'}}>This field is required</span>}
                                </div>

                                <div className="input-wrapper">
                                    <label><strong>Service Details</strong></label><br />

                                    <textarea className="inputStyle" name="details" id="details" cols="40" rows="5" {...register('details', { required: true })}></textarea>
                                    <br></br>
                                    {errors.details && <span style={{color:'red'}}>Field Required</span>}

                                </div>
                            </div>



                            <div className="group-field" >
                                <div className="input-wrapper">
                                    <label><strong>Price</strong></label><br />
                                    <input className="inputStyle" type="number" placeholder="price"  {...register("price", { required: true })} />
                                    <br/>
                                    {errors.price && <span style={{color:'red'}}>This field is required</span>}
                                </div>

                                <br />
                                <div className="input-wrapper">
                                    <label><strong>Image upload</strong></label><br />
                                    <input className="inputStyle" type="file" name="image" onChange={handleImageUpload} id="" />
                                    <br />

                                    {
                                        visible ? status ? <p><span style={{ color: 'green' }}>image uploaded successfully... Please proceed now</span></p>


                                            : <p><span style={{ color: 'red' }}>image uploading...</span></p>
                                            : <p></p>
                                    }
                                    {
                                        spinner &&

                                        <Spinner className="spinner-center" animation="grow" role="status" variant="warning">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>

                                    }
                                    <br />
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
                            <input className="btn-prime" type="submit" value="Save" />

                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddService;