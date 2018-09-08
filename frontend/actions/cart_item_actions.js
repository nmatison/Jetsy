import * as CartItemApiUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";

export const createCartItem = (cartItem) => (dispatch) => (
  CartItemApiUtil.createCartItem(cartItem)
);

export const fetchCartItems = cartId => dispatch =>
  CartItemApiUtil.fetchCartItems(cartId).then(payload =>
    dispatch(receiveCartItems(payload))
  );

export const deleteCartItem = (cartItemId) => (dispatch) => (
  CartItemApiUtil.deleteCartItem(cartItemId).then(cartItem => dispatch(removeCartItem(cartItem)))
);


const receiveCartItems = payload => ({
  type: RECEIVE_CART_ITEMS,
  payload
});

const removeCartItem = (cartItem) => {
  console.log(cartItem) 
  return ({
    
    type: REMOVE_CART_ITEM,
    cartItemId: cartItem.id
  })
}
