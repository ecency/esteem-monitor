import {StyleSheet} from 'react-native';
import myColors from './colorConfig';

export default styles=StyleSheet.create({
    headers:{backgroundColor: myColors.headerColor},
    headerText:{color:myColors.headerTextColor},
    contentDashboard:{flex:1,paddingHorizontal: 20, paddingVertical: 10,backgroundColor:myColors.contentBackGroundColor},
    contentWitnessScreen:{flex:1,backgroundColor:myColors.contentBackGroundColor},
    contentSettings:{flex:1,backgroundColor:myColors.contentBackGroundColor},
    footerTab:{backgroundColor:myColors.footerColor},
    defaultBoldText:{fontSize: 16, color: myColors.defaultTextColor, fontWeight: 'bold'},
    defaultText:{fontSize: 14, color: myColors.defaultTextColor},
})