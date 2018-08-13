import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import {fetchProduct, updateProduct, deleteProduct, fetchProducts} from '../../actions/product_actions';



class EditProductForm extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.product.id != nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
      }
    }

  render() {
    if (!this.props.product.user_id) return null;
    const {action, formType, product, deleteProduct } = this.props;
    return (
        <ProductForm action={action} match={this.props.match} history={this.props.history} formType={formType} product={product} deleteProduct={deleteProduct} />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const defaultProduct = {user_id: null, product_name: '', description: '', price: ''};
  const product = state.entities.products[ownProps.match.params.productId] || defaultProduct;
  // const currentUserId = state.session.id;
  // const ownerId = product.user_id;
  const formType = "Update Your Product's Information";
  return {product, formType}
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  action: (product) => dispatch(updateProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForm);