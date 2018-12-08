import {CHANGE_MARKETDATA_URL,CHANGE_SERVER_URL,PARTICIPATION_ALERT} from '../action/actionTypes';

const initialState={
    serverUrl: "https://api.steemit.com",
    marketDataUrl:"http://api.esteem.ws:8080/api/market-data/",
    participationAlert:false,
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
        default:
            return state;
    }
};

export default reducer;