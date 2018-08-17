import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import cartReducer from './cart_reducer';
import cartItemReducer from './cart_item_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
  cartItems: cartItemReducer
});

export default entitiesReducer;
