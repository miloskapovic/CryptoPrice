import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import CurrencyPicker from './components/CurrencyPicker'
import CryptoTable from './components/CryptoTable'

function App() {
  const [selectedCurrency, setCurrency] = useState('USD');
  console.log('selectedCur', selectedCurrency)
  return (
    <Container>
      <CurrencyPicker setCurrency={setCurrency} />
      <CryptoTable selectedCurrency={selectedCurrency} />
    </Container>

  );
}

export default App;
