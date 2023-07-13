import React from 'react'
import './Checkout.css';
import { useStateValues } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
const Checkout = () => {
    const [{ basket }] = useStateValues();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='checkoutAd' />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>This is your shopping basket</h2>
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
                )}
            </div>
            <div className='checkout__right'>

                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout