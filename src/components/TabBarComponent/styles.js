import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $footer:'$footerColor',
    $textColor:'$activeTintColor',
    $textInActiveColor:'$inactiveTintColor',
    container:{
        height:50,
        flexDirection:'row',
        backgroundColor:'$footer',
        justifyContent:'space-around',
        borderTopWidth:1,
        borderTopColor:'#2B2B2B'
    },
    tabButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabTextActive:{
        color:'$textColor'
    },
    tabTextInActive:{
        color:'$textInActiveColor'
    }
});

export default  styles;