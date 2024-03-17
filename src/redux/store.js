import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk';

const reducer = combineReducers({
    // getProducts:getProductReducer
});
const middleware  = [thunk];

const Store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;
