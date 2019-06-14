import React, { useEffect } from 'react'
import { ListGroup, Button, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchCrypto, fetchBitcoin } from '../store/actions/index'
import LoadingSpinner from './LoadingSpinner'

const StyledListGroup = styled(ListGroup)`
    width: 50%;
`
const StyledDiv = styled.div`
    display: flex;
`
const StyledButton = styled(Button)`
    margin: 5px;
    width: 100%;
`
const CryptocurrencyDetails = (props) => {
    const { bitcoin, selectedCurrency, selectedCryptoId, onFetchCrypto, crypto, onFetchBitcoin, loading } = props
    
    useEffect(() => {
        onFetchCrypto(selectedCurrency, selectedCryptoId)
        onFetchBitcoin(selectedCurrency)
    }, [selectedCurrency, selectedCryptoId, onFetchCrypto, onFetchBitcoin])

    let content = (
        <Container>
            <StyledButton className={'m-2'} onClick={ () => onFetchCrypto(selectedCurrency, selectedCryptoId) }>Refresh</StyledButton>
            {
                loading ? 
                <LoadingSpinner /> : (crypto && crypto.quote[selectedCurrency] && bitcoin && bitcoin.quote[selectedCurrency]) && (
                <StyledDiv>
                <StyledListGroup className="float-left">
                    <ListGroup.Item>Rank: {crypto.cmc_rank}</ListGroup.Item>
                    <ListGroup.Item>Name: {crypto.name}</ListGroup.Item>
                    <ListGroup.Item>Symbol: {crypto.symbol}</ListGroup.Item>
                    <ListGroup.Item>Price in {selectedCurrency}: {crypto.quote[selectedCurrency].price}</ListGroup.Item>
                    <ListGroup.Item>Volume: {crypto.quote[selectedCurrency].volume_24h}</ListGroup.Item>
                    <ListGroup.Item>Market cap: {crypto.quote[selectedCurrency].market_cap}</ListGroup.Item>
                    </StyledListGroup>
                    <StyledListGroup className="float-right">
                    <ListGroup.Item>Price in Bitcoin: {crypto.quote[selectedCurrency].price * (1/bitcoin.quote[selectedCurrency].price)}</ListGroup.Item>
                    <ListGroup.Item>1 hour change: {crypto.quote[selectedCurrency].percent_change_1h}</ListGroup.Item>
                    <ListGroup.Item>24 hour change: {crypto.quote[selectedCurrency].percent_change_24h}</ListGroup.Item>
                    <ListGroup.Item>7 day change: {crypto.quote[selectedCurrency].percent_change_7d}</ListGroup.Item>
                    <ListGroup.Item>Total supply: {crypto.total_supply}</ListGroup.Item>
                    <ListGroup.Item>Available supply: {crypto.circulating_supply}</ListGroup.Item>
                </StyledListGroup>
                </StyledDiv>
                )
            }
        </Container>
    )
    return content
}

const mapStateToProps = state => {
    return {
        crypto: state.crypto.crypto,
        selectedCryptoId: state.crypto.cryptoId,
        bitcoin: state.crypto.bitcoin,
        loading: state.crypto.loading,
        selectedCurrency: state.currency.selectedCurrency
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        onFetchCrypto: (currency, id) => dispatch( fetchCrypto(currency, id) ),
        onFetchBitcoin: (currency) => dispatch( fetchBitcoin(currency) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyDetails)
