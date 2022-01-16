import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";


import { selectIsCollectionsFetching } from "../../redux/shop/shop.selector";
import { WithSpinner } from "../with-spinner/with-spinner.component";
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

//   Simple way without 'compose'
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));


// with compose => it evaluate from Right to Left 
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview); 

export default CollectionsOverviewContainer;