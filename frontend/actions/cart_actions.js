import * as CartApiUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART = "RECEIVE_CART";

export const fetchCartItems = (cart) => (dispatch) => (
  CartApiUtil.fetchCartItems(cart).then(payload => dispatch(receiveCartItems(payload)))
);

export const createCart = (cart) => dispatch => (
  CartApiUtil.createCart(cart).then(cart => dispatch(receiveCart(cart)))
);


const receiveCartItems = (payload) => ({
  type: RECEIVE_CART_ITEMS,
  payload
});

const receiveCart = (cart) => {
  console.log(cart);
  return ({
  type: RECEIVE_CART,
  cart
  })
}
