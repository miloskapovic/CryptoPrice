import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCrypto = ( cryptoId, bitcoin ) => {
    return {
        type: actionTypes.SET_CRYPTO,
        cryptoId: cryptoId,
        bitcoin: bitcoin
    };
};

export const fetchCryptosSuccess = ( cryptos ) => {
    return {
        type: actionTypes.FETCH_CRYPTOS_SUCCESS,
        cryptos: cryptos
    };
};

export const fetchCryptosFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CRYPTOS_FAIL,
        error: error
    };
};

export const fetchCryptosStart = () => {
    return {
        type: actionTypes.FETCH_CRYPTOS_START
    };
};

export const fetchCryptos = (currency) => {
    return dispatch => {
        dispatch(fetchCryptosStart());
        axios.get('http://localhost:3003/api/cryptos', {params: {
            currency: currency
          }})
        .then( res => {
            const fetchedCryptos = [];
            for ( let key in res.data.data ) {
                fetchedCryptos.push( {
                    ...res.data.data[key],
                    id: key
                } );
            }
            dispatch(fetchCryptosSuccess(res.data.data));
        } )
        .catch( err => {
            dispatch(fetchCryptosFail(err));
        } );
    };
};

export const fetchCryptoSuccess = ( crypto ) => {
    return {
        type: actionTypes.FETCH_CRYPTO_SUCCESS,
        crypto: crypto
    };
};

export const fetchCryptoFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CRYPTO_FAIL,
        error: error
    };
};

export const fetchCryptoStart = () => {
    return {
        type: actionTypes.FETCH_CRYPTO_START
    };
};

export const fetchCrypto = (currency, id) => {
    return dispatch => {
        dispatch(fetchCryptoStart());
        axios.get('http://localhost:3003/api/crypto', {params: {
            currency: currency,
            id: id
          }})
        .then( res => {
            const fetchedCryptos = [];
            for ( let key in res.data.data ) {
                fetchedCryptos.push( {
                    ...res.data.data[key],
                    id: key
                } );
            }
            dispatch(fetchCryptoSuccess(res.data.data));
        } )
        .catch( err => {
            dispatch(fetchCryptoFail(err));
        } );
    };
};