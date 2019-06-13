import React from 'react';
import { Table, Button, Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    margin: 5px;
    width: 100%;
`

const CryptocurrencyList = (props) => {
    const { cryptos, selectedCurrency, getSelectedCrypto, refreshCryptos } = props
    const bitcoin = cryptos ? cryptos.find(crypto => crypto.symbol === 'BTC') : null

    const cryptosList = cryptos ? cryptos.map(crypto =>
        <tr onClick={() => getSelectedCrypto(crypto, bitcoin)}>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quote[selectedCurrency].price}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_24h}</td>
        </tr>
    ) : null
    
    const spinner = props.loading ? (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : null
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
                {spinner}
                {cryptosList}
            </tbody>
        </Table>
        </Container>
    )
    return content
};

export default CryptocurrencyList;
