import { element, createApp } from 'deku';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
const render = createApp(document.getElementById('root'), store.dispatch);

function update(App, context) {
  render(<App />, context);
}

update(App, store.getState());

store.subscribe(() => {
  update(App, store.getState());
});

