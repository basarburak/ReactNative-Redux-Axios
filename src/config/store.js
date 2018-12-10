import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

export default store = () => {
    return createStore(reducers, {}, applyMiddleware(ReduxThunk))
}