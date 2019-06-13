import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedCurrency: 'USD'
};

const setCurrency = ( state, action ) => {
    return updateObject( state, {
        selectedCurrency: action.currency,
    } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENCY: return setCurrency( state, action );
        default: return state;
    }
};

export default reducer;