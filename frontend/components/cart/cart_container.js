import Cart from './cart.jsx';
import { connect } from 'react-redux';
import { fetchCartItems } from '../../actions/cart_item_actions';

const mapStateToProps = ({entities}) => ({
  cartItems: entities.cart.cartItems,
  cartProducts: entities.products
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);