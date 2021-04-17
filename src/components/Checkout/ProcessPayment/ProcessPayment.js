import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IflNTKDgwVscgIouQXnyCaZNkWtbFjUNTZO3g72mJ0DtXKAvDyFa6YYzIyGbxefTMpLwyI0jW6KEgsRvifZAo6E00MIcZo0nk');

const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;