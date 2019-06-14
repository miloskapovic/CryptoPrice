import React from 'react';
import CurrencyPicker from './CurrencyPicker'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { setCurrency, fetchCryptos } from '../store/actions/index'


const Settings = (props) => {
    const { onSetCurrency, selectedCurrency, onFetchCryptos } = props
    let content = (
        <Container>
            <CurrencyPicker setCurrency={onSetCurrency} fetchCryptos={onFetchCryptos}/>
            <h2>{selectedCurrency}</h2>
        </Container>
    )
    return content
};

const mapStateToProps = state => {
    return {
        selectedCurrency: state.currency.selectedCurrency
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptos: (selectedCurrency) => dispatch( fetchCryptos(selectedCurrency) ),
        onSetCurrency: (selectedCurrency) => dispatch( setCurrency(selectedCurrency) )
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
