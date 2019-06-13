import * as actionTypes from './actionTypes';

export const setCurrency = ( currency ) => {
    return {
        type: actionTypes.SET_CURRENCY,
        currency: currency
    };
};