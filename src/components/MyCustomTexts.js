import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MyText = props => (
    <Text style={styles.text}>{props.children}</Text>
);
const MySecondText = props =>(
    <Text style={styles.text1}>{props.children}</Text>
);
const MyText1 = props => (
    <Text style={styles.text2}>{props.children}</Text>
);
const MyText2 = props => (
    <Text style={styles.text3}>{props.children}</Text>
);
const styles=StyleSheet.create({
    text:{fontSize:12, color:'blue', fontWeight:'bold',marginVertical:3},
    text1:{color:'red', fontSize:12, fontWeight:'bold',marginVertical:3},
    text2:{fontSize:12, color:'blue', fontWeight:'bold'},
    text3:{fontSize:10, color:'#111'},

});
export  {MySecondText,MyText, MyText1,MyText2};