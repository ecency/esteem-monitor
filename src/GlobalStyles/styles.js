import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    $tabColor:'$footerColor',
    $activeTint:'$activeTintColor',
    $inactiveTint:'$inactiveTintColor',
    headers:{backgroundColor: '$headerColor'},
    headerText:{color:'$headerTextColor'},
    contentDashboard:{flex:1,paddingHorizontal: 20, paddingVertical: 10,backgroundColor:'$contentBackGroundColor'},
    contentWitnessScreen:{flex:1,backgroundColor:'$contentBackGroundColor'},
    contentSettings:{flex:1,backgroundColor:'$contentBackGroundColor'},
    defaultBoldText:{fontSize: 16, color: '$defaultTextColor', fontWeight: 'bold'},
    defaultText:{fontSize: 14, color: '$defaultTextColor'},
});