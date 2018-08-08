import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preLoadedState = {}) => (
  createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
