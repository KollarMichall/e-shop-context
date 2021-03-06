import React, { useContext } from 'react'
import { CartContext } from '../../providers/cart/CartContext'
import CustomButton from '../custom-button/CustomButton'
import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price} = item
    const { addItem } = useContext(CartContext)
    return (
        <div className='collection-item'>
            <div className="image"
            style={{ backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
                <CustomButton onClick={() => addItem(item)} inverted> Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem
