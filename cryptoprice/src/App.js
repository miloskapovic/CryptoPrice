import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  const { cryptos, onFetchCryptos, loading } = props
  const [selectedCurrency, setCurrency] = useState('USD');
  // const [selectedCryptoId, setCryptoId] = useState(null);

  // const bitcoin = cryptos ? cryptos.find(crypto => crypto.symbol === 'BTC') : null

  // useEffect(() => onFetchCryptos(selectedCurrency), [selectedCurrency, onFetchCryptos])
  // const getSelectedCrypto = (selectedCryptoId) => {
  //   setCryptoId(selectedCryptoId)
  //   props.history.push('/details')
  // }

  // const refreshCryptos = () => {
  //   onFetchCryptos(selectedCurrency)
  // }

  return (
    <Container fluid>
      <StyledNavbar cryptos={props.cryptos}/>
      {/* <CryptocurrencyList {...props} cryptos={cryptos} loading={loading} refreshCryptos={refreshCryptos} selectedCurrency={selectedCurrency} getSelectedCrypto={getSelectedCrypto} />
      <CryptocurrencyDetails {...props} selectedCurrency={selectedCurrency} selectedCryptoId={selectedCryptoId} bitcoin={bitcoin} />
      <Settings {...props} setCurrency={setCurrency} selectedCurrency={selectedCurrency}/> */}
    </Container>

  );
}

// const mapStateToProps = state => {
//   return {
//       cryptos: state.crypto.cryptos,
//       loading: state.crypto.loading
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       onFetchCryptos: (selectedCurrency) => dispatch( fetchCryptos(selectedCurrency) )
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
export default App;

