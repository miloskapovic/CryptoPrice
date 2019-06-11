import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchCryptos } from '../store/actions/index'

const CryptoTable = (props) => {

    useEffect(() => props.onFetchCryptos(), [])
    console.log('cryptos', props.cryptos)
    let content = (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
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
