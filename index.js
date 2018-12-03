import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import { YellowBox } from 'react-native';
import bgMessaging from './src/components/Firebase/bgMessaging';
import {checkPermission, createNotificationListeners} from "./src/components/Firebase/fbConfig";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
//import {checkPermission,createNotificationListeners} from './src/components/Firebase/fbConfig';

checkPermission();
createNotificationListeners();
const store=configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('EsteemMonitor', () => RNRedux);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
