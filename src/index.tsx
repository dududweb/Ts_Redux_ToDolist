import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,

	document.getElementById('root'),
);
