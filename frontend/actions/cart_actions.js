import * as CartApiUtil from '../util/cart_api_util';

export const createCart = (cart) => dispatch => (
  CartApiUtil.createCart(cart)
);
