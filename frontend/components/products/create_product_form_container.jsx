import {connect} from 'react-redux';
import {createProduct} from '../../actions/product_actions';
import ProductForm from './ProductForm';

const mapStateToProps = state => {
  const product = {user_id: state.session.id, product_name: '', description: '', price: 0.00}
  const formType = "Sell A Product";
  return {product, formType}
};

const mapDispatchToProps = dispatch => (
  action: (product) => dispatch(createProduct(product))
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
