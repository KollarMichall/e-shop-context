import React, { useContext } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import CartContext from '../contexts/cart/CartContext'

const CartIcon = ({ itemCount }) => {
    const { toggleHidden } = useContext(CartContext)
    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingCart className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStatetoProps = state => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStatetoProps)(CartIcon)
