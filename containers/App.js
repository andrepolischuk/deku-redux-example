import { element } from 'deku';
import { fetchApiIfNeeded } from '../actions';
import styles from './App.css';

function refetch(dispatch) {
  return event => {
    event.preventDefault();
    dispatch(fetchApiIfNeeded());
  };
}

function render({ context, dispatch }) {
  const { isFetching, result } = context;

  return (
    <div class={isFetching ? styles.fetching : styles.normal}>
      {!result && isFetching
        ? <h3>Loading...</h3>
        : <h3>Hello world!</h3>
      }
      {!isFetching &&
        <a href='#' onClick={refetch(dispatch)}>
          Fetch
        </a>
      }
    </div>
  );
}

function onCreate({ dispatch }) {
  dispatch(fetchApiIfNeeded());
}

export default {
  render,
  onCreate
};
