import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import CryptocurrencyList from './components/CryptocurrencyList'
import CryptocurrencyDetails from './components/CryptocurrencyDetails'
import Settings from './components/Settings'
import cryptoReducer from './store/reducers/crypto';
import currencyReducer from './store/reducers/currency';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  currency: currencyReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <Router>
      <App />
        <Route exact path="/" component={CryptocurrencyList} />
        <Route path="/details" component={CryptocurrencyDetails} />
        <Route path="/settings" component={Settings} />
    </Router>
  </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) );

serviceWorker.unregister();

