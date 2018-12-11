import {CHANGE_MARKETDATA_URL,CHANGE_SERVER_URL,PARTICIPATION_ALERT,CHANGE_THEME} from '../action/actionTypes';

const initialState={
    serverUrl: "https://api.steemit.com",
    marketDataUrl:"http://api.esteem.ws:8080/api/market-data/",
    participationAlert:false,
    mode:'night'
};

const reducer =(state=initialState,action)=> {
    switch (action.type){
        case CHANGE_SERVER_URL:
            return {
                ...state,
                serverUrl:action.serverUrl
            };
        case CHANGE_MARKETDATA_URL:
            return {
                ...state,
                marketDataUrl:action.marketDataUrl
            };
        case PARTICIPATION_ALERT:
            return {
                ...state,
                participationAlert:action.participationAlert
            };
        case CHANGE_THEME:
            return {
                ...state,
                mode:action.mode
            };
        default:
            return state;
    }
};

export default reducer;