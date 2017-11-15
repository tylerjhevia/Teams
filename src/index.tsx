import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/index';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

let initialState = {};

const devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f;

let middleware = applyMiddleware(thunk);
const store: any = middleware(devtools(createStore))(rootReducer, initialState);

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
