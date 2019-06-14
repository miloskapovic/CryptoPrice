import React, { useEffect } from 'react'
import { Table, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import styled from 'styled-components'

import { fetchCryptos, setCrypto } from '../store/actions/index'
import LoadingSpinner from './LoadingSpinner'

const StyledButton = styled(Button)`
    margin: 5px;
    width: 100%;
`

const CryptocurrencyList = (props) => {
    const { cryptos, selectedCurrency, loading, onFetchCryptos, onSetCrypto } = props
    useEffect(() => onFetchCryptos(selectedCurrency), [selectedCurrency, onFetchCryptos])

    const getSelectedCrypto = (selectedCryptoId) => {
        onSetCrypto(selectedCryptoId)
        props.history.push('/details')
    }

    const cryptosList = cryptos && cryptos.map(crypto => crypto.quote[selectedCurrency] &&
        (<tr onClick={() => getSelectedCrypto(crypto.id)}>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quote[selectedCurrency].price}</td>
        <td>{crypto.quote[selectedCurrency].percent_change_24h}</td>
        </tr>)
    )

    let content = (
        <Container fluid>
        <StyledButton onClick={() => onFetchCryptos(selectedCurrency)}>Refresh</StyledButton>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price in {selectedCurrency}</th>
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
}

const mapStateToProps = state => {
    return {
        cryptos: state.crypto.cryptos,
        loading: state.crypto.loading,
        selectedCurrency: state.currency.selectedCurrency
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptos: (selectedCurrency) => dispatch( fetchCryptos(selectedCurrency) ),
        onSetCrypto: (selectedCurrency, bitcoin) => dispatch( setCrypto(selectedCurrency, bitcoin) )
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CryptocurrencyList))
