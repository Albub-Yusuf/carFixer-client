import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
                <div className="card" style={{width:'400px', margin:'10px',textAlign:'left', boxShadow:'5px 5px 10px lightgrey'}}>
                     <div style={{margin:'5px',padding:'5px'}}><small>{review.review}</small></div>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'end'}}>
                            <div style={{padding:'10px',minHeight:'100px',width:'110px', }}>
                                <img src={review.image} style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                            </div>
                            <div style={{padding:'10px',minHeight:'100px',width:'240px'}}>
                                <p><strong>{review.name}</strong></p>
                                <p><small><strong>{review.email}</strong></small></p>
                                <br></br>
                            </div>
                            </div>
                    </div>
        </div>
    );
};

export default ReviewCard;