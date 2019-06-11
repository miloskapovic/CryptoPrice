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

export const fetchCryptos = () => {
    return dispatch => {
        dispatch(fetchCryptosStart());
    };
};