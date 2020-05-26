import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import testReducer from './test/testReducers';
import homeReducer from './home/reducers';

const testPersistConfig = {
  key: 'test',
  storage,
  blacklist: ['_persist'],
};

const rootReducer = combineReducers({
  test: persistReducer(testPersistConfig, testReducer),
  home: homeReducer,
});

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);