import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import { selectShopSections } from '../../redux/shop/shop.selector'


const Shop = ({ collections }) => {
    
    return (
        <div>
           {collections.map(({id, ...otherCollectionProps}) => (
               <CollectionPreview key={id} {...otherCollectionProps}/>
           ))} 
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
  collections: selectShopSections
})

export default connect( mapStateToProps )(Shop)
