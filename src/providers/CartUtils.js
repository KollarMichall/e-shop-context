export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
            )
        
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}
export const removeItemFromCart = (cartItems, carItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === carItemToRemove.id)

    if (existingCartItem.quantity === 1 ) {
        return cartItems.filter(cartItem => cartItem.id !== carItemToRemove.id)
        
    }
    return cartItems.map(cartItem => 
        cartItem.id === carItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
        )
}
export const filterItemFromCart = (cartItems, item) => 
cartItems.filter(cartItem => cartItem.id !== item.id)

export const getCartItemCount = cartItems => 
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
       accumulatedQuantity + cartItem.quantity ,
       0
       )


export const getCartTotal = cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )