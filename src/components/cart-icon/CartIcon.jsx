import React, { useContext } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../providers/cart/CartContext'


const CartIcon = () => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext)
    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingCart className='shopping-icon'/>
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
}


export default CartIcon
