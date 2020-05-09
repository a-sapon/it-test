import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  // write your reducers here
});

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, enhancer);