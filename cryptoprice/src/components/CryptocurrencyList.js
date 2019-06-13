import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const CryptocurrencyList = (props) => {
    const { cryptos, selectedCurrency, getSelectedCrypto } = props
    const bitcoin = cryptos ? cryptos.find(crypto => crypto.symbol === 'BTC') : null
    console.log('jahahahha', bitcoin)
    const cryptosList = cryptos ? cryptos.map(crypto =>
        <tr onClick={() => getSelectedCrypto(crypto, bitcoin)}>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quote[selectedCurrency].price}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_24h}</td>
        </tr>
    ) : null

    let content = (
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
                {cryptosList}
            </tbody>
        </Table>
    )
    return content
};

export default CryptocurrencyList;
