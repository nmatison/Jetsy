import {connect} from 'react-redux';
import {createProduct, fetchProduct} from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = state => {
  const product = {user_id: null, product_name: '', description: '', price: ''}
  const formType = "Add a new listing";
  const currentUserId = state.session.id;
  return {product, formType, currentUserId}
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct),
  action: (product) => dispatch(createProduct(product))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
