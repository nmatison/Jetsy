import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import productErrorsReducer from './product_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  product: productErrorsReducer,
  reviews: reviewErrorsReducer
});


export default errorsReducer;
