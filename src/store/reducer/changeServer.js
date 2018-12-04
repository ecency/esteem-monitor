import {AsyncStorage} from 'react-native';
import {CHANGE_MARKETDATA_URL,CHANGE_SERVER_URL} from '../action/actionTypes';

const initialState={
    serverUrl: "https://api.steemit.com",
    marketDataUrl:"http://api.esteem.ws:8080/api/market-data/"
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
        default:
            return state;
    }
};

export default reducer;