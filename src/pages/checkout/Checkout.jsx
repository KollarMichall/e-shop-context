import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stipe-button/StripeButton'
import { CartContext } from '../../providers/cart/CartContext'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <StripeButton price={cartTotal}/>
        </div>
    )
}

export default Checkout
