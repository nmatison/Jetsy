import { connect } from 'react-redux';
import { createProduct, removeErrors } from '../../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = state => {
  const product = {
    user_id: null,
    product_name: '',
    description: '',
    price: '',
    photoFile: null,
    photoUrl: null,
    c_name: "",
    c_name2: "",
    c_name3: ""
  };
  const formType = "Add a new listing";
  const currentUserId = state.session.id;
  return {product, formType, currentUserId, errors: state.errors.product}
};

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  action: (product) => dispatch(createProduct(product))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
