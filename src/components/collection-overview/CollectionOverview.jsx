import React, { useContext } from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview'
import CollectionsContext from '../../contexts/collections/CollectionsContext'

import './collection-overview.styles.scss'

const CollectionOverview = () => {
  
const collectionsmap = useContext(CollectionsContext)
const collections = Object.keys(collectionsmap).map(key => collectionsmap[key])

  return (
        <div className='collection-overview'>
             {collections.map(({id, ...otherCollectionProps}) => (
               <CollectionPreview key={id} {...otherCollectionProps}/>
           ))} 
        </div>
    )
}

export default CollectionOverview
