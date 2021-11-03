import React, { useContext } from 'react'
import CollectionItem from '../../components/collection-item/CollectionItem'
import CollectionsContext from '../../contexts/collections/CollectionsContext'
import { CollectionPageContainer, ItemsContainer, TitleContainer } from './CollectionPageStyles'

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.collectionId]
    const { title, items} = collection

    return (
        <CollectionPageContainer>
            <TitleContainer >{title}</TitleContainer>
            <ItemsContainer >
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}



export default CollectionPage
