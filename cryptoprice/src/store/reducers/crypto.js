import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cryptos: [],
    crypto: null,
    cryptoId: null,
    bitcoin: null,
    loading: false
};

const setCrypto = ( state, action ) => {
    return updateObject( state, {
        cryptoId: action.cryptoId,
        bitcoin: action.bitcoin
    } );
};

const fetchCryptosStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCryptosSuccess = ( state, action ) => {
    return updateObject( state, {
        cryptos: action.cryptos,
        loading: false
    } );
};

const fetchCryptosFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchCryptoStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCryptoSuccess = ( state, action ) => {
    return updateObject( state, {
        crypto: action.crypto,
        loading: false
    } );
};

const fetchCryptoFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CRYPTO: return setCrypto( state, action );
        case actionTypes.FETCH_CRYPTOS_START: return fetchCryptosStart( state, action );
        case actionTypes.FETCH_CRYPTOS_SUCCESS: return fetchCryptosSuccess( state, action );
        case actionTypes.FETCH_CRYPTOS_FAIL: return fetchCryptosFail( state, action );
        case actionTypes.FETCH_CRYPTO_START: return fetchCryptoStart( state, action );
        case actionTypes.FETCH_CRYPTO_SUCCESS: return fetchCryptoSuccess( state, action );
        case actionTypes.FETCH_CRYPTO_FAIL: return fetchCryptoFail( state, action );
        default: return state;
    }
};

export default reducer;