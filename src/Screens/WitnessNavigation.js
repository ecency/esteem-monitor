import WebScreen from "./WebScreen";
import WitnessesScreen from './WitnessesScreen';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator(
    {
        Home: {
            screen: WitnessesScreen,
        },
        Web: {
            screen: WebScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);