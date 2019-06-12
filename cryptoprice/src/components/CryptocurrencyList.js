import React from 'react';
import { Table } from 'react-bootstrap';

const CryptocurrencyList = (props) => {
    const { cryptos, selectedCurrency } = props
    console.log('jaadi list', cryptos[0])
    const cryptosList = cryptos ? cryptos.map(crypto =>                         <tr>
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
