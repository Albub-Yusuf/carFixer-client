import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="card" style={{ width: '300px', margin: '10px', padding: '20px', textAlign: 'left', boxShadow: '5px 5px 10px lightgrey' }}>
                <div style={{ margin: '5px', padding: '5px' }}><small>{review.review}</small></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ padding: '10px', minHeight: '100px', }}>
                        <img src={review.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    </div>
                    <div style={{ padding: '5px', minHeight: '100px', width: '240px' }}>
                        <p><strong>{review.name}<br></br>
                            <small><strong>{review.email}</strong></small>
                        </strong></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;