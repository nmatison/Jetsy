import * as CartItemApiUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const createCartItem = (cartItem) => (dispatch) => (
  CartItemApiUtil.createCartItem(cartItem)
);

export const deleteCartItem = (cartItemId) => (dispatch) => (
  CartItemApiUtil.deleteCartItem(cartItemId).then(cartItem => dispatch(removeCartItem(cartItem)))
);

// const receiveCartItem = (cartItem) => ({
//   type: RECEIVE_CART_ITEM,
//   cartItem
// });

const removeCartItem = (cartItem) => ({
  type: REMOVE_CART_ITEM,
  cartItemId: cartItem.id
})
