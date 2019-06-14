import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    cryptos: [],
    crypto: null,
    cryptoId: null,
    bitcoin: null,
    loading: false
}

const setCrypto = ( state, action ) => {
    return updateObject( state, {
        cryptoId: action.cryptoId,
    } )
}

const fetchCryptosStart = ( state, action ) => {
    return updateObject( state, { loading: true } )
}

const fetchCryptosSuccess = ( state, action ) => {
    return updateObject( state, {
        cryptos: action.cryptos,
        loading: false
    } )
}

const fetchCryptosFail = ( state, action ) => {
    return updateObject( state, { loading: false } )
}

const fetchCryptoStart = ( state, action ) => {
    return updateObject( state, { loading: true } )
}

const fetchCryptoSuccess = ( state, action ) => {
    return updateObject( state, {
        crypto: action.crypto,
        loading: false
    } )
}

const fetchCryptoFail = ( state, action ) => {
    return updateObject( state, { loading: false } )
}

const fetchBitcoinStart = ( state, action ) => {
    return updateObject( state, { loading: true } )
}

const fetchBitcoinSuccess = ( state, action ) => {
    return updateObject( state, {
        bitcoin: action.bitcoin,
        loading: false
    } )
}

const fetchBitcoinFail = ( state, action ) => {
    return updateObject( state, { loading: false } )
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CRYPTO: return setCrypto( state, action )
        case actionTypes.FETCH_CRYPTOS_START: return fetchCryptosStart( state, action )
        case actionTypes.FETCH_CRYPTOS_SUCCESS: return fetchCryptosSuccess( state, action )
        case actionTypes.FETCH_CRYPTOS_FAIL: return fetchCryptosFail( state, action )
        case actionTypes.FETCH_CRYPTO_START: return fetchCryptoStart( state, action )
        case actionTypes.FETCH_CRYPTO_SUCCESS: return fetchCryptoSuccess( state, action )
        case actionTypes.FETCH_CRYPTO_FAIL: return fetchCryptoFail( state, action )
        case actionTypes.FETCH_BITCOIN_START: return fetchBitcoinStart( state, action )
        case actionTypes.FETCH_BITCOIN_SUCCESS: return fetchBitcoinSuccess( state, action )
        case actionTypes.FETCH_BITCOIN_FAIL: return fetchBitcoinFail( state, action )
        default: return state
    }
}

export default reducer