import { CALL_API } from '../middleware/api';

export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

function fetchApi() {
  return {
    [CALL_API]: {
      types: [ API_REQUEST, API_SUCCESS, API_FAILURE ]
    }
  };
}

function shouldFetchApi(state) {
  return !state.isFetching;
}

export function fetchApiIfNeeded() {
  return (dispatch, getState) =>
    shouldFetchApi(getState()) && dispatch(fetchApi());
}
