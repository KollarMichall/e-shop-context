import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51IMDbqArtysnlLjHBUAnUcliNdUJOOXTH8ymUULo5nukjt0dOtkfztStMTS715FsnWng1wnTRNRKSu56f4Y0um4k00rWzKdJ1K"
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='E-Shop'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton
