import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard/ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
const Services = () => {
  
    const [services, setServices] = useState([]);
    useEffect(() => {

    
        fetch('https://evening-shore-59266.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {

                setServices(data);                
            }

            );

    }, [])

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ];

    return (
       <section mt-5 className="service-container">
          <div>
          <Container  mt-5 >
               <br></br>
               <div style={{textAlign:'center', color:'#333'}}>
                   <h2 style={{fontSize:'48px'}}><strong>Our <span style={{color:'crimson'}}>Services</span></strong></h2>
                   <p style={{color:'#333'}}><strong>we provide various car services</strong></p>
               <br></br><br></br>
               </div>

               <div style={{display:'flex', alignItems:'center', justifyContent:'center',flexWrap:'wrap'}}>
                   {
                       services.slice(0).reverse().map(serv => <ServiceCard key={serv._id} service={serv}></ServiceCard>)
                   }
               </div>
              
           </Container>
          </div>
       </section>
    );
};

export default Services;