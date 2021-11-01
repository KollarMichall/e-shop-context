import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import { updateCollections } from '../../redux/shop/shop.action'
import CollectionPage from '../collection-page/CollectionPage'
import {
  firestore,
  convertCollectionsSnapshotToMap,

} from '../../firebase/firebase.utils.js'
import WithSpinner from '../../components/with-spinner/WithSpinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {
state = {
  loading: true
}
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');


    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false})
      
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsPagewWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);