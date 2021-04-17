import React from 'react';

const MyOrderCard = ({order}) => {
    return (
      
            <div style={{width:'300px',minHeight:'200px', boxShadow:'10px 10px 20px lightgrey',border:'3px solid crimson', borderRadius:'5px',margin:'10px'}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between',padding:'20px'}}>
                    <div>
                        <img src={order.image} style={{width:'100px'}} alt=""/>
                    </div>
                    <div>
                        <div style={{border:'2px solid #333', padding:'10px'}}>{order.status}</div>
                    </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <h5><strong>{order.service}</strong></h5>
                    <p><small>{order.details}</small></p>
                </div>
            </div>
       
    );
};

export default MyOrderCard;