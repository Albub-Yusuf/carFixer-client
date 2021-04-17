import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, CartContext } from '../../../App';

const SimpleCardForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [cartInfos, setCartInfos] = useContext(CartContext);

    const id = cartInfos;
    const url = `https://evening-shore-59266.herokuapp.com/service/${id}`;

    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data => {
            setCartInfos(data);
            console.log(cartInfos);
        })

    },[])
  



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            // console.log('[PaymentMethod]', paymentMethod.type);
            const newOrder = {
                name: loggedInUser.name,
                email: loggedInUser.email,
                service: cartInfos.title,
                details:cartInfos.details,
                price: cartInfos.price,
                image: cartInfos.imageURL,
                status: 'pending',
                payment:paymentMethod.type,
                paymentId: paymentMethod.id,
                orderTime: new Date()
            }

            // 


            const url = `https://evening-shore-59266.herokuapp.com/addOrder`;



    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {

        //   alert('your order placed successfully')
        console.log(newOrder);
    
        setPaymentSuccess(paymentMethod.id);
        }
        else{
            setPaymentError(null);

        }
      })

            // console.log(newOrder);
    
            // setPaymentSuccess(paymentMethod.id);
            // setPaymentError(null);
        }
    }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div style={{width:'400px', margin:'50px 50px', padding:'10px'}}>
                <label><strong>Name: </strong></label>
                <input style={{width:'400px', margin:'10px 0px', padding:'10px'}} type="text"  value={loggedInUser.name}/>
                <br/>
                <label><strong>Email: </strong></label>
                <input style={{width:'400px', margin:'10px 0px', padding:'10px'}} type="text"  value={loggedInUser.email}/>
                <br/>
                <label><strong>Service: </strong></label>
                <input style={{width:'400px', margin:'10px 0px', padding:'10px'}} type="text"  value={cartInfos.title}/>
                <br/> 
                <CardElement />
                <br></br>
                 <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                     <p><strong>Your service charge will be BDT {cartInfos.price}/-</strong></p>
                     <button type="submit" disabled={!stripe}>Pay</button>
                 </div>
                </div>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color:'green'}}> We received your payment. Your order placed successfully!!!. Thanks for choosing car fixer.</p>
            }
        </div>
    );
};

export default SimpleCardForm;