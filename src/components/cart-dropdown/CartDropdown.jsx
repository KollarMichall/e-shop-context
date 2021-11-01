import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/CartItem'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const history = useHistory()
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

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
                    dispatch(toggleCartHidden()) }
                } inverted>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}


export default (CartDropdown)
