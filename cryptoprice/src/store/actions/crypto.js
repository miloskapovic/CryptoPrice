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
    console.log('ulaaazi')
    return dispatch => {
        dispatch(fetchCryptosStart());
        fetch("https://sandbox.coinmarketcap.com/v1/cryptocurrency/map", {
            body: "symbol=BTC,USDT,BNB",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Cmc_pro_api_key": "d46077a7-2259-4929-8426-bc746ff8b5d1"
            },
            method: "POST"
        })
        .then( res => {
            const fetchedCryptos = [];
            for ( let key in res.data ) {
                fetchedCryptos.push( {
                    ...res.data[key],
                    id: key
                } );
            }
            dispatch(fetchCryptosSuccess(fetchedCryptos));
        } )
        .catch( err => {
            dispatch(fetchCryptosFail(err));
        } );
    };
};