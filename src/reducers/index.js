import { combineReducers } from 'redux';
import httpReducer from '../reducers/httpReducer'

export default combineReducers({
    http: httpReducer
});