import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import productErrorsReducer from './product_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  product: productErrorsReducer
});


export default errorsReducer;
