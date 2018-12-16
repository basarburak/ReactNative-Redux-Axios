import { HTTP_ERROR, SHOW_LOADING, HTTP_SUCCESS } from '../constant/types';
import { comments, comment } from '../constant/state';

const INITIAL_STATE = {
    errorMessage: '',
    isLoading: false
}

export default httpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HTTP_SUCCESS:
            state = httpTostate(action.payload.state, action.payload.response)
            return { ...state, errorMessage: '', isLoading: false }
        case HTTP_ERROR:
            return { ...state, errorMessage: action.payload, isLoading: false }
        case SHOW_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}

const httpTostate = (state, result) => {
    switch (state) {
        case comments:
            return { ...INITIAL_STATE, comments: result }
        case comment:
            return { ...INITIAL_STATE, comment: result }
        default:
            console.log('bulamadım');
            break;
    }
}