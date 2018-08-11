import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import {fetchProduct, updateProduct} from '../../actions/product_actions';


class EditProductForm extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
    if (this.props.currentUserId !== this.props.ownerId) {
      this.props.history.push("/")}
    }

  render() {
    if (!this.props.product) return null;
    const {action, formType, product } = this.props;
    return (
      <ProductForm action={action} formType={formType} product={product} />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const defaultProduct = {user_id: state.session.id, product_name: '', description: '', price: 0.00}
  const product = state.entities.products[ownProps.match.params.postId] || defaultProduct
  const currentUserId = state.session.id;
  const ownerId = product.user_id
  const formType = "Update Post";
  return {product, formType, currentUserId, ownerId}
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  action: (product) => dispatch(updateProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForm);
