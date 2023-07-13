import React from 'react'
import { useStateValues } from '../StateProvider';
import './CheckoutProduct.css';
const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValues();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProuct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct