import { HTTP_ERROR, SHOW_LOADING, HTTP_SUCCESS } from '../constant/types';
import { getAlbums } from '../constant/global';

const INITIAL_STATE =
{
    errorMessage: '',
    isLoading: false,
    albums: ''
}

export default httpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HTTP_SUCCESS:
            console.log(action.payload);
            state = httpTostate(action.payload.request, action.payload.response)
            return { ...state, errorMessage: '', isLoading: false }
        case HTTP_ERROR:
            return { ...state, errorMessage: action.payload, isLoading: false }
        case SHOW_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}


const httpTostate = (apiMethod, result) => {
    switch (apiMethod) {
        case getAlbums:
            return { ...INITIAL_STATE, albums: result }
        default:
            console.log('bulamadım');
            break;
    }
}