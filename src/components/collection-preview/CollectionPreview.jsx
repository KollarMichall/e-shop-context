import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from '../collection-item/CollectionItem'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <Link to={`/shop/${title.toLowerCase()}`}>
            <h1 className='title'>{title.toUpperCase()}</h1>
            </Link>
            <div className="preview">
                {items.filter((items, idx) => idx < 4 ).map((item) => 
                <CollectionItem key={item.id} item={item}/>
                )}

            </div>
        </div>
    )
}

export default CollectionPreview
