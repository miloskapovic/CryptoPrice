import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchCryptos } from '../store/actions/index'

const CryptoTable = (props) => {

    useEffect(() => props.onFetchCryptos(), [])
    console.log('cryptos', props.cryptos)
    const cryptos = props.cryptos.map(crypto =>                         <tr>
        <td>{crypto.cmc_rank}</td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>@mdo</td>
        </tr>
    )
    let content = (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price in {props.selectedCurrency}</th>
                </tr>
            </thead>
            <tbody>
                {cryptos}
            </tbody>
        </Table>
    )
    return content
};

const mapStateToProps = state => {
    return {
        cryptos: state.crypto.cryptos,
        loading: state.crypto.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptos: () => dispatch( fetchCryptos() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTable);
