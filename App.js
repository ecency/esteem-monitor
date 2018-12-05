import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import  StatusScreen from './src/Screens/StatusScreen';
import  WitnessesScreen from './src/Screens/WitnessNavigation';
import SettingsScreen from './src/Screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './src/GlobalStyles/styles';
import myColors from './src/GlobalStyles/colorConfig';

export default createBottomTabNavigator(
    {
        Status: StatusScreen,
        Witnesses: WitnessesScreen,
        Settings: SettingsScreen
    },
    {
        navigationOptions:({navigation }) => ({
            tabBarIcon:({focused , tintColor})=> {
                const { routeName } = navigation.state;
                if (routeName === 'Settings'){
                    return <Ionicons name='md-settings' size={20} color={tintColor} />;
                } else if ( routeName === 'Witnesses') {
                    return <Ionicons name='ios-pulse' size={20} color={tintColor}/>
                } else if ( routeName === 'Status') {
                    return <Ionicons name='logo-bitcoin' size={20} color={tintColor}/>
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: myColors.activeTintColor,
            inactiveTintColor: myColors.inactiveTintColor,
            style:styles.footerTab,
            labelStyle:{fontSize:14},
        },
    }
);

