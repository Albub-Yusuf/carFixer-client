import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Testimonials.css';
import Carousel from 'react-elastic-carousel';
import ReviewCard from './ReviewCard/ReviewCard';


const Testimonials = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch('https://evening-shore-59266.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 968, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },
    ];

    return (
        <div style={{ background: '#e9ecef', width: '100%', marginTop: '10px' }} mt-5>

            <Container mt-5>
                <br></br>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                    <h2 style={{ fontSize: '48px' }}><strong><span style={{ color: '#333' }}>Clients</span> <span style={{ color: 'crimson' }}> Feedbacks</span></strong></h2>
                    <p style={{ color: '#333' }}><strong>Testimonies</strong></p>
                    <br></br><br></br>
                </div>

                <div style={{ width: '100%', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Carousel id="reviewCarousel" breakPoints={breakPoints}>
                        {
                            reviews.slice(0).reverse().map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </Carousel>

                </div>

            </Container>
            <br></br>
        </div>
    );
};

export default Testimonials;