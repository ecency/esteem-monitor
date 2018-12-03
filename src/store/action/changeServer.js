import {CHANGE_MARKETDATA_URL,CHANGE_SERVER_URL} from './actionTypes';

export const changeServerUrl = (url) => {
    return {
        type:CHANGE_SERVER_URL,
        serverUrl:url
    }
};

export const changeMarketDataUrl= (url) => {
    return {
        type:CHANGE_MARKETDATA_URL,
        marketDataUrl:url
    }
};