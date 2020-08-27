
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../src/reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
