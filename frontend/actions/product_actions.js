import * as ProductApiUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";


export const fetchProducts = () => dispatch => (
  ProductApiUtil.fetchProducts().then((products) => dispatch(receiveProducts(products)))
);

export const fetchProduct = (id) => dispath => (
  ProductApiUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
);

export const createProduct = (product) => dispatch => {
  return ProductApiUtil.createProduct(product).then(product => dispatch(receiveProduct(product)), (err) => dispatch(receiveErrors(err)))
};

export const updateProduct = (product) => dispatch => (
  ProductApiUtil.updateProduct(product).then(product => dispatch(receiveProduct(product)), (err) => dispatch(receiveErrors(err)))
);


export const deleteProduct = (id) => dispath => {
  return ProductApiUtil.deleteProduct(id).then(product => dispatch(removeProduct(product)))
};

const receiveProducts = (payload) => ({
  type: RECEIVE_PRODUCTS,
  payload
})

const receiveProduct = (payload) => ({
  type: RECEIVE_PRODUCT,
  payload
})

const removeProduct = (payload) => {
  return {
    type: REMOVE_PRODUCT,
    productId: Object.keys(payload.product)[0]
  }
}

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors: errors.responseJSON
})};

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})
