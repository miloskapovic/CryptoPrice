import * as actionTypes from './actionTypes';
import axios from 'axios';

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
        axios.get('http://localhost:3003/api/crypto', {params: {
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
            console.log('jeeeee', fetchedCryptos)
            dispatch(fetchCryptosSuccess(res.data.data));
        } )
        .catch( err => {
            dispatch(fetchCryptosFail(err));
        } );
    };
};