import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingCart className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStatetoProps = state => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon)
