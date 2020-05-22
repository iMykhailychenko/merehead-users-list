import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const enhancer = applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
