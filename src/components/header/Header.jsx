import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import { HeaderConainer, LogoContainer, OptionLink, OptionsContainer } from './HeaderStyles'

const Header = ({ currentUser, hidden}) => {
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
const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})
export default connect(mapStateToProps)(Header)
