import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../../App';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const [cartInfos, setCartInfos] = useContext(CartContext);
    const loadService = (id) => {

        setCartInfos(id);
      

    }
    return (
      

<div className="card-service" style={{textAlign:'center'}}>
    <div className="imgBx">
        <img src={service.imageURL}></img>
        <h3>{service.title}</h3>
    </div>
    <div className="content">
   
    <p><strong>{service.details}</strong></p>
    <p><strong>{service.price}/-</strong></p>
     
     <Link to="/checkout"><Button variant="danger" onClick={() => loadService(service._id)}>Order Now</Button></Link>
    

    </div>

</div>


		
		

                
        
    );
};

export default ServiceCard;