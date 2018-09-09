import Cart from './cart.jsx';
import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';

const mapStateToProps = ({entities}) => ({
  cartItems: entities.cart.cartItems,
  cartProducts: entities.products,
  cartId: entities.cart.id
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId)),
  deleteCartItem: (cartId) => dispatch(deleteCartItem(cartId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);