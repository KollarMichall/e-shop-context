import { createContext, useEffect, useState } from 'react'
import { addItemToCart, filterItemFromCart, getCartItemCount, getCartTotal, removeItemFromCart } from '../CartUtils'

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))
    
    useEffect(() => {
       setCartItemsCount(getCartItemCount(cartItems))
       setCartTotal(getCartTotal(cartItems))
        
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            cartItemsCount,
            cartTotal,
            addItem,
            removeItem,
            clearItemFromCart
        }}>

        { children }
        </CartContext.Provider>
    )
}
export default CartProvider
