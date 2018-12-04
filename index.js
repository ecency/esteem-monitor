import {AppRegistry} from 'react-native';
import RootComponent from './src/RootComponent/RootComponent';
import {YellowBox} from 'react-native';
import bgMessaging from './src/components/Firebase/bgMessaging';
import {checkPermission, createNotificationListeners} from "./src/components/Firebase/fbConfig";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
checkPermission();
createNotificationListeners();

AppRegistry.registerComponent('EsteemMonitor', ()=> RootComponent);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
