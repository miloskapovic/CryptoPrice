import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cryptos: [],
    loading: false
};

const fetchCryptosStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCryptosSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchCryptosFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CRYPTOS_START: return fetchCryptosStart( state, action );
        case actionTypes.FETCH_CRYPTOS_SUCCESS: return fetchCryptosSuccess( state, action );
        case actionTypes.FETCH_CRYPTOS_FAIL: return fetchCryptosFail( state, action );
        default: return state;
    }
};

export default reducer;