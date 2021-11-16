import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jw2i1IAb4rOOU6t7MUbLdBz8b6e691Q8TT0OlfaF6644PjfAd0HG6JsXcUpccYQyD56eOrbendSwc7sPQGwi7Cv00KX14sBcG')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <p>Pay ${appointment.price}</p>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


/*
1. install stripe and stripe-react
2. set publishable key
3. make Element
4. checkout form
---------
5. create payment method
6. server create payement intent api
7. load client secret
8. confirmCard payment
9. handle user error and payment
*/