import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../App';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HiddenNav from '../HiddenNav/HiddenNav';
import SideNav from '../SideNav/SideNav';
import './AddReview.css';

const AddReview = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [spinnerdataUpload, setSpinnerdataUpload] = useState(null);
    const [visible, setVisible] = useState(0);



        //Store data to database
        const onSubmit = data => {

           
    
                const reviewInfo = {
                   
                    name:loggedInUser.name,
                    email:loggedInUser.email,
                    image:loggedInUser.image,
                    review:data.review,

                }
    
                setSpinnerdataUpload(1);
                console.log(reviewInfo);
                fetch('https://evening-shore-59266.herokuapp.com/addReview', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(reviewInfo)
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
                    <h3>Review</h3>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mainPanel">

                        <div className="group-field" >
                            <div className="input-wrapper">
                                <label><strong>Give a review</strong></label><br />
                               

                                <textarea className="inputStyle" name="review" id="review" cols="40" rows="5" {...register('review', {required:true})}>Your review...</textarea>
                                 {errors.review && <span>Field Required</span>}

                                <input className="btn-add-to-cart"  style={{ padding: '15px', width: '80px', borderRadius: '5px' , backgroundColor:'crimson', color:'#fff'}} type="submit" value="Save" />
                            </div>
                        </div>

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
                </form>


            </div>
        </div>
    </div>
    );
};

export default AddReview;