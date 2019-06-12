import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import { fetchCryptos } from './store/actions/index'
import CryptocurrencyList from './components/CryptocurrencyList'
import CryptocurrencyDetails from './components/CryptocurrencyDetails'
import Settings from './components/Settings'
import Navbar from './components/Navbar'

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
`;

function App(props) {
  const [selectedCurrency, setCurrency] = useState('USD');
  useEffect(() => props.onFetchCryptos(selectedCurrency), [selectedCurrency])
  const { cryptos } = props
  return (
    <Container fluid>
      <Router>
      <StyledNavbar cryptos={props.cryptos}/>
      <Switch>
      <Route exact path="/" render={(props) => <CryptocurrencyList {...props} cryptos={cryptos} selectedCurrency={selectedCurrency} />} />
      <Route path="/details" render={(props) => <CryptocurrencyDetails {...props} cryptos={cryptos} selectedCurrency={selectedCurrency} />} />
      <Route path="/settings" render={(props) => <Settings {...props} setCurrency={setCurrency} selectedCurrency={selectedCurrency}/>}/>
      </Switch>
      </Router>
    </Container>

  );
}

const mapStateToProps = state => {
  return {
      cryptos: state.crypto.cryptos,
      loading: state.crypto.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchCryptos: (selectedCurrency) => dispatch( fetchCryptos(selectedCurrency) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
