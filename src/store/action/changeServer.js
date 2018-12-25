import {CHANGE_MARKETDATA_URL, CHANGE_SERVER_URL, PARTICIPATION_ALERT, CHANGE_THEME} from './actionTypes';

export const changeServerUrl = (url) => {
    return {
        type: CHANGE_SERVER_URL,
        serverUrl: url
    }
};

export const changeMarketDataUrl = (url) => {
    return {
        type: CHANGE_MARKETDATA_URL,
        marketDataUrl: url
    }
};
export const toggleParticipation = (value) => {
    return {
        type: PARTICIPATION_ALERT,
        participationAlert: value
    }
};
export const changeTheme = (value) => {
    let mode = '';
    console.log('switch',value);
    if (value) {
        mode = 'day'
    } else {
        mode = 'night'
    }
    console.log('mode',mode);
    return {
        type: CHANGE_THEME,
        mode: mode

    }

};