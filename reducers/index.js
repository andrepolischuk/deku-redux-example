import { API_REQUEST, API_SUCCESS, API_FAILURE } from '../actions';

export default function rootReducer(state = { isFetching: false, result: null }, action) {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case API_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.result
      };
    case API_FAILURE:
      return {
        ...state,
        isFetching: false,
        result: null
      };
    default:
      return state;
  }
}
