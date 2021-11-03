import React, { useContext } from 'react'
import { CartContext } from '../../providers/cart/CartContext'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price , quantity} = cartItem
    const { addItem, removeItem, clearItemFromCart} = useContext(CartContext)
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
                <span className="name">{name}</span>
                <span className="quantity">
                 <div className="arrow" onClick={() => removeItem(cartItem)}> &#10096;</div>  
                    <div className="value">
                        {quantity} 
                    </div> 
                 <div className="arrow" onClick={() => addItem(cartItem)}> &#10097;</div>  
                </span>
                <span className="price">${price}</span>
                <span className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
            
        </div>
    )
}

export default CheckoutItem
