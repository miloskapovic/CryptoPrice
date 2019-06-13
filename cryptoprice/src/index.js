import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import cryptoReducer from './store/reducers/crypto';

const rootReducer = combineReducers({
  crypto: cryptoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) );

serviceWorker.unregister();

