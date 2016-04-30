import { element, createApp } from 'deku';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
const render = createApp(document.getElementById('root'), store.dispatch);

render(<App />, store.getState());

store.subscribe(() => {
  render(<App />, store.getState());
});

