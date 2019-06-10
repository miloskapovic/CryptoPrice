import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import CurrencyPicker from './components/CurrencyPicker'
import CryptoTable from './components/CryptoTable'

function App() {
  return (
    <Container>
      <CurrencyPicker />
      <CryptoTable />
    </Container>

  );
}

export default App;
