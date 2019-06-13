import React from 'react';
import CurrencyPicker from './CurrencyPicker'
import { Container } from 'react-bootstrap'

const Settings = (props) => {
    const { setCurrency, selectedCurrency } = props
    let content = (
        <Container>
            <CurrencyPicker setCurrency={setCurrency}/>
            <h2>{selectedCurrency}</h2>
        </Container>
    )
    return content
};

export default Settings;