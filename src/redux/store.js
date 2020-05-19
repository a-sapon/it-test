import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import testReducer from './reducers';

// const rootReducer = combineReducers({
//     testReducer
// });

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(testReducer, enhancer);