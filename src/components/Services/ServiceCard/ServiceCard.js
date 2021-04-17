import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../../App';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const [cartInfos, setCartInfos] = useContext(CartContext);
    const loadService = (id) => {

        setCartInfos(id);
      

    }
    return (
        <div>
             <div className="card" style={{width:'300px', height:'350px',textAlign:'center', margin:'10px',marginRight:'10px'}}>
                            <div style={{margin:'10px', padding:'10px'}}>
                                <img src={service.imageURL} style={{height:'100px'}}/>
                            </div>
                            <div>
                                <h5><strong>{service.title}</strong></h5>
                                <p><small>{service.details}</small></p>
                                <p><strong>{service.price}/-</strong></p>
                                <Link to="/checkout"><Button variant="danger" onClick={() => loadService(service._id)}>Order Now</Button></Link>
                                <br></br>
                            </div>
                        </div>
        </div>
    );
};

export default ServiceCard;