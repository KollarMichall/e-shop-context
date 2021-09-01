import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingCart className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)