import {connect} from 'react-redux'
import SellerProducts from './seller_products';

const mapStateToProps = ({entities: { products }}) => ({
  products: Object.values(products)
});

export default connect(
  mapStateToProps,
  null
)(SellerProducts);