import React, { useContext } from 'react'
import { ReactComponent as Logo} from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import { CartContext } from '../../providers/cart/CartContext'
import { HeaderConainer, LogoContainer, OptionLink, OptionsContainer } from './HeaderStyles'

const Header = ({ currentUser }) => {
    const { hidden } = useContext(CartContext)

    return (
        <HeaderConainer>
            <LogoContainer to='/'>
            <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                { currentUser
                ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                 <CartIcon/>
            </OptionsContainer>
           {!hidden && <CartDropdown/>}
            
        </HeaderConainer>
    )
}

export default Header
