import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AskAnything.css';

const AskAnything = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {


        const newQuotation = {
            name: data.name,
            email: data.email,
            message: data.message,
            date: new Date()
        }

        fetch('https://evening-shore-59266.herokuapp.com/addQuotation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuotation)
        })
            .then(res => {
                alert('Thanks for your message. We will get you soon...')
            })


    };
    return (
        <section className="ask-anything-wrapper">
            <Container mt-5>
                <br></br><br></br>
                <div className="ask-anything-inner-wrapper">
                    <h2 style={{ fontSize: '48px' }}><strong><span style={{ color: '#fff' }}>Ask </span> <span className="prime"> anything</span></strong></h2>
                    <p style={{ color: '#fff' }}><strong>we love to hear from you ask anything or get a quotation</strong></p>
                    <br></br><br></br>
                </div>

                <div className="flex-center">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <label><strong>Name: </strong></label>
                            <br></br>
                            <input className="inputStyle" style={{ width: '350px', height: '50px' }} placeholder="name" {...register("name", { required: true })} />
                            <br></br>
                            {errors.name && <span style={{color:'red'}}>This field is required</span>}


                            <br /><br></br>

                            <label><strong>Email: </strong></label>
                            <br></br>
                            <input className="inputStyle" style={{ width: '350px', height: '50px' }} placeholder="email" {...register("email", { required: true })} />
                            <br></br>
                            {errors.email && <span style={{color:'red'}}>This field is required</span>}

                            <br></br><br></br>
                            <label><strong>Message: </strong></label>
                            <br></br>
                            <textarea className="inputStyle" name="message" id="message" cols="35" rows="5" {...register('message', { required: true })}></textarea>
                            {errors.message && <span style={{color:'red'}}>This field is required</span>}

                            <br></br>
                            <br></br>
                            <Button type="submit" variant="danger" style={{ width: '350px', height: '50px', borderRadius: '5px' }}><strong>Send</strong></Button>
                        </form>
                    </div>
                </div>

            </Container>
            <br></br><br></br>
        </section>
    );
};

export default AskAnything;