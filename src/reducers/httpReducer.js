import { HTTP_ERROR, SHOW_LOADING, HTTP_SUCCESS } from '../constant/types';
const INITIAL_STATE = { errorMessage: '', result: '', isLoading: false }

export default httpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HTTP_SUCCESS:
            return { ...state, result: action.payload, errorMessage: '', isLoading: false }
        case HTTP_ERROR:
            return { ...state, errorMessage: action.payload, isLoading: false }
        case SHOW_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}