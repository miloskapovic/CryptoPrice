import React, { useEffect, useState } from 'react';
import { ListGroup, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { fetchCrypto } from '../store/actions/index'
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
    const { bitcoin, selectedCurrency, selectedCryptoId, onFetchCrypto, crypto, loading } = props
    console.log('jajajaj', selectedCurrency, selectedCryptoId)
    
    useEffect(() => { onFetchCrypto(selectedCurrency, selectedCryptoId) }, [selectedCurrency, selectedCryptoId, onFetchCrypto])
    const [currency, setCurrency] = useState('USD');
    if (currency !== selectedCurrency) {
        onFetchCrypto(selectedCurrency, selectedCryptoId)
    }

    let content = crypto && (
        <Container>
            <StyledButton className={'m-2'} onClick={() => onFetchCrypto(selectedCurrency, selectedCryptoId)}>Refresh</StyledButton>
            {
                loading ?
                <LoadingSpinner /> :
                <StyledDiv>
                <StyledListGroup className="float-left">
                    <ListGroup.Item>Rank: {crypto[selectedCryptoId].cmc_rank}</ListGroup.Item>
                    <ListGroup.Item>Name: {crypto[selectedCryptoId].name}</ListGroup.Item>
                    <ListGroup.Item>Symbol: {crypto[selectedCryptoId].symbol}</ListGroup.Item>
                    <ListGroup.Item>Price in {selectedCurrency}: {crypto[selectedCryptoId].quote[selectedCurrency].price}</ListGroup.Item>
                    <ListGroup.Item>Volume: {crypto[selectedCryptoId].quote[selectedCurrency].volume_24h}</ListGroup.Item>
                    <ListGroup.Item>Market cap: {crypto[selectedCryptoId].quote[selectedCurrency].market_cap}</ListGroup.Item>
                    </StyledListGroup>
                    <StyledListGroup className="float-right">
                    <ListGroup.Item>Price in Bitcoin: {crypto[selectedCryptoId].quote[selectedCurrency].price * (1/bitcoin.quote[selectedCurrency].price)}</ListGroup.Item>
                    <ListGroup.Item>1 hour change: {crypto[selectedCryptoId].quote[selectedCurrency].percent_change_1h}</ListGroup.Item>
                    <ListGroup.Item>24 hour change: {crypto[selectedCryptoId].quote[selectedCurrency].percent_change_24h}</ListGroup.Item>
                    <ListGroup.Item>7 day change: {crypto[selectedCryptoId].quote[selectedCurrency].percent_change_7d}</ListGroup.Item>
                    <ListGroup.Item>Total supply: {crypto[selectedCryptoId].total_supply}</ListGroup.Item>
                    <ListGroup.Item>Available supply: {crypto[selectedCryptoId].circulating_supply}</ListGroup.Item>
                </StyledListGroup>
                </StyledDiv>
            }
        </Container>
    )
    return content
};

const mapStateToProps = state => {
    return {
        crypto: state.crypto.crypto,
        selectedCryptoId: state.crypto.cryptoId,
        bitcoin: state.crypto.bitcoin,
        loading: state.crypto.loading,
        selectedCurrency: state.currency.selectedCurrency
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onFetchCrypto: (currency, id) => dispatch( fetchCrypto(currency, id) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyDetails);
