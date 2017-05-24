import test from 'ava';
import reducer, { initialState } from '../reducers';

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER,
  HANDLE_ERROR
} from '../actions';

test('return the initial state', t => {
  t.deepEqual(reducer(undefined, {}), initialState);
});

test('handle FETCH_USER_REQUEST', t => {
  t.deepEqual(reducer(initialState, {
    type: FETCH_USER_REQUEST
  }), {
    ...initialState,
    fetching: true
  });
});

test('handle FETCH_USER_SUCCESS', t => {
  t.deepEqual(reducer({
    ...initialState,
    fetching: true
  }, {
    type: FETCH_USER_SUCCESS,
    payload: {
      login: 'andrepolischuk'
    }
  }), {
    ...initialState,
    fetching: false,
    users: [
      {
        login: 'andrepolischuk'
      }
    ]
  });
});

test('handle FETCH_USER_FAILURE', t => {
  t.deepEqual(reducer({
    ...initialState,
    fetching: true
  }, {
    type: FETCH_USER_FAILURE
  }), {
    ...initialState,
    fetching: false
  });
});

test('handle DELETE_USER', t => {
  t.deepEqual(reducer({
    ...initialState,
    users: [
      {
        login: 'andrepolischuk'
      }
    ]
  }, {
    type: DELETE_USER,
    payload: {
      login: 'andrepolischuk'
    }
  }), initialState);
});

test('handle HANDLE_ERROR', t => {
  t.deepEqual(reducer(initialState,{
    type: HANDLE_ERROR,
    payload: {
      error: 'Error'
    }
  }), {
    ...initialState,
    error: 'Error'
  });
});
