import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValues } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const Payment = () => {
    const [{ basket, user }] = useStateValues();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123,React Lane</p>
                        <p>Los Angeles, CA </p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix='$'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment