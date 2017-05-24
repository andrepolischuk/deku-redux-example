import { element } from 'deku';
import { addUser, deleteUser, handleError } from '../actions';
import styles from './App.css';

function submit(dispatch) {
  return event => {
    const {value} = event.target.querySelector('input');

    event.preventDefault();

    if (value) {
      dispatch(addUser(value));
    }
  };
}

function render({ context, dispatch }) {
  const { users, error, fetching } = context;

  return (
    <div class={fetching ? styles.fetching : styles.normal}>
      <form onSubmit={submit(dispatch)}>
        <input
          type="text"
          placeholder="Type github username..."
          tabindex="0"
          autofocus />
        <button type="submit">Add</button>
      </form>
      {error &&
        <p class={styles.error}>
          {error}&nbsp;
          <button
            type="button"
            onClick={() => dispatch(handleError(null))}>
            Close
          </button>
        </p>
      }
      {users.map(user => (
        <p>
          <a href={user.html_url}>{user.name}</a>&nbsp;
          <small>{user.login}</small>&nbsp;
          <button onClick={() => dispatch(deleteUser(user.login))}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default {
  render
};
