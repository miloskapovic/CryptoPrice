import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CurrencyPicker from './components/CurrencyPicker'
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

function App() {
  const [selectedCurrency, setCurrency] = useState('USD');
  console.log('selectedCur', selectedCurrency)
  return (
    <Container fluid>
      <Router>
      <StyledNavbar />
      <Switch>
      <Route exact path="/" component={CryptocurrencyList} />
      <Route path="/details" component={CryptocurrencyDetails} />
      <Route path="/settings" component={Settings} />
      </Switch>
      </Router>
    </Container>

  );
}

export default App;
