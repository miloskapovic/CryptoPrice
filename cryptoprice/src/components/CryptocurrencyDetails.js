import React from 'react';
import { Table } from 'react-bootstrap';

const CryptocurrencyDetails = (props) => {
    const { cryptos, selectedCurrency } = props
    const bitcoin = cryptos.find(crypto => crypto.symbol === 'BTC') || null
    if (bitcoin) {
        console.log('jaadi list', 1/bitcoin.price)
    }
    const cryptosList = cryptos ? cryptos.map(crypto =>
    <tr>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quote[selectedCurrency].price}</td>
        <td>{crypto.quote[selectedCurrency].volume_24h}</td>
        <td>{crypto.quote[selectedCurrency].market_cap}</td>
        <td>{crypto.quote[selectedCurrency].price * (1/bitcoin.quote[selectedCurrency].price)}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_1h}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_24h}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_7d}</td>
        <td>{crypto.total_supply}</td>
        <td>{crypto.circulating_supply}</td>
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
                <th>Volume</th>
                <th>Market cap</th>
                <th>Price in Bitcoin</th>
                <th>1 hour change</th>
                <th>24 hour change</th>
                <th>7 day change</th>
                <th>Total supply</th>
                <th>Available supply</th>
                </tr>
            </thead>
            <tbody>
                {cryptosList}
            </tbody>
        </Table>
    )
    return content
};

export default CryptocurrencyDetails;