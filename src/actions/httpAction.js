import { HTTP_ERROR, HTTP_SUCCESS, SHOW_LOADING } from "../constant/types";
import axios from 'axios';
import { apiUrl } from '../constant/global';

export const httpGet = (config) => {
  return (dispatch) => {
    myDispatcher(dispatch, SHOW_LOADING, true);

    axios({
      method: 'get',
      url: apiUrl + config.method,
      params: config.params
    }).then(res => {
      myDispatcher(dispatch, HTTP_SUCCESS, { response: res.data, state: config.state });
    }).catch(err => {
      myDispatcher(dispatch, HTTP_ERROR, err);
    });
  };
};

const myDispatcher = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};