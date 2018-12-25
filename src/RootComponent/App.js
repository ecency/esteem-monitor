import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import  StatusScreen from '../Screens/StatusScreen';
import  WitnessesScreen from '../Screens/WitnessNavigation';
import SettingsScreen from '../Screens/SettingsScreen';
import { TabBarComponent } from '../components/TabBarComponent';

export default createBottomTabNavigator(
    {
        Status: StatusScreen,
        Witnesses: WitnessesScreen,
        Settings: SettingsScreen
    },
    {
        tabBarComponent: ({navigation}) => <TabBarComponent navigation={navigation} />,
    }
);
