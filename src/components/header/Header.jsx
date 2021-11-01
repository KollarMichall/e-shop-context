import React, { useState } from 'react'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import CartContext from '../contexts/cart/CartContext'
import { HeaderConainer, LogoContainer, OptionLink, OptionsContainer } from './HeaderStyles'

const Header = ({ currentUser }) => {
    const [hidden, setHidden] = useState(true)
    const toggleHidden = () => setHidden(!hidden)

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
                <CartContext.Provider value={{ 
                    hidden,
                    toggleHidden
                    }}>
                        <CartIcon/>
                </CartContext.Provider>
            </OptionsContainer>
           {!hidden && <CartDropdown/>}
            
        </HeaderConainer>
    )
}

export default Header
