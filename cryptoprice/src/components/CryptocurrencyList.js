import React, { useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

import { fetchCryptos } from '../store/actions/index'
import LoadingSpinner from './LoadingSpinner'

const StyledButton = styled(Button)`
    margin: 5px;
    width: 100%;
`

const CryptocurrencyList = (props) => {
    const { cryptos, selectedCurrency, refreshCryptos, loading, onFetchCryptos } = props
    console.log('selectedCurrency', loading)

    useEffect(() => onFetchCryptos(selectedCurrency), [selectedCurrency, onFetchCryptos])

    const getSelectedCrypto = (selectedCryptoId) => {
        // setCryptoId(selectedCryptoId)
        props.history.push('/details')
    }
    const cryptosList = cryptos && cryptos.map(crypto =>
        <tr onClick={() => getSelectedCrypto(crypto.id)}>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quote[selectedCurrency].price}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_24h}</td>
        </tr>
    )

    let content = (
        <Container fluid>
        <StyledButton onClick={() => refreshCryptos()}>Refresh</StyledButton>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price in {props.selectedCurrency}</th>
                <th>24 hour change</th>
                </tr>
            </thead>
            <tbody>
                {loading ? <LoadingSpinner /> : cryptosList}
            </tbody>
        </Table>
        </Container>
    )
    return content
};

const mapStateToProps = state => {
    return {
        cryptos: state.crypto.cryptos,
        loading: state.crypto.loading,
        selectedCurrency: state.currency.selectedCurrency
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptos: (selectedCurrency) => dispatch( fetchCryptos(selectedCurrency) )
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CryptocurrencyList));
