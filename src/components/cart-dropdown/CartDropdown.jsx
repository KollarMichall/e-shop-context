import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../providers/cart/CartContext'
import CartItem from '../cart-item/CartItem'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const history = useHistory()
    const {cartItems, toggleHidden} = useContext(CartContext)

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            : <span className="empty-message">Your cart is empty!</span>
            }
            </div>
               <CustomButton onClick={() => {
                    history.push('/checkout') 
                    toggleHidden() }
                } inverted>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}


export default (CartDropdown)
