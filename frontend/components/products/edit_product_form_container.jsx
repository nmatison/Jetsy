import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import {fetchProduct, updateProduct, deleteProduct, fetchProducts} from '../../actions/product_actions';


class EditProductForm extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
    debugger
    if (this.props.currentUserId !== this.props.ownerId) {
      this.props.history.push("/")}
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.deleteProduct(this.props.match.params.productId)
    }
    // .then(() => this.props.fetchProducts()).then(this.props.history.push('/products'))

    componentWillReceiveProps(nextProps) {
      if (this.props.product.id != nextProps.match.params.postId) {
        this.props.fetchPOst(nextProps.match.params.postId);
      }
    }

  render() {
    const {action, formType, product } = this.props;
    return (
      <div className="edit-product-div">
        <ProductForm action={action} formType={formType} product={product} />
        <input type="submit" value="Delete Product" onClick={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId]
  const currentUserId = state.session.id;
  const ownerId = product.user_id
  const formType = "Update Post";
  return {product, formType, currentUserId, ownerId}
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  action: (product) => dispatch(updateProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForm);
