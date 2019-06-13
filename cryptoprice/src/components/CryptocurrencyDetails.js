import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledListGroup = styled(ListGroup)`
    width: 50%;
`
const StyledDiv = styled.div`
    display: flex;
`
const CryptocurrencyDetails = (props) => {
    const { bitcoin, selectedCurrency, selectedCrypto, refreshCryptos } = props
    let content = selectedCrypto ? (
        <StyledDiv>
        <StyledListGroup class="float-left">
            <ListGroup.Item>Rank: {selectedCrypto.cmc_rank}</ListGroup.Item>
            <ListGroup.Item>Name: {selectedCrypto.name}</ListGroup.Item>
            <ListGroup.Item>Symbol: {selectedCrypto.symbol}</ListGroup.Item>
            <ListGroup.Item>Price in {selectedCurrency}: {selectedCrypto.quote[selectedCurrency].price}</ListGroup.Item>
            <ListGroup.Item>Volume: {selectedCrypto.quote[selectedCurrency].volume_24h}</ListGroup.Item>
            <ListGroup.Item>Market cap: {selectedCrypto.quote[selectedCurrency].market_cap}</ListGroup.Item>
            </StyledListGroup>
            <StyledListGroup class="float-right">
            <ListGroup.Item>Price in Bitcoin: {selectedCrypto.quote[selectedCurrency].price * (1/bitcoin.quote[selectedCurrency].price)}</ListGroup.Item>
            <ListGroup.Item>1 hour change: {selectedCrypto.quote[selectedCurrency].percent_change_1h}</ListGroup.Item>
            <ListGroup.Item>24 hour change: {selectedCrypto.quote[selectedCurrency].percent_change_24h}</ListGroup.Item>
            <ListGroup.Item>7 day change: {selectedCrypto.quote[selectedCurrency].percent_change_7d}</ListGroup.Item>
            <ListGroup.Item>Total supply: {selectedCrypto.total_supply}</ListGroup.Item>
            <ListGroup.Item>Available supply: {selectedCrypto.circulating_supply}</ListGroup.Item>
        </StyledListGroup>
        <Button className={'m-2'} onClick={() => refreshCryptos()}>Refresh</Button>
        </StyledDiv>
    ) : null
    return content
};

export default CryptocurrencyDetails;