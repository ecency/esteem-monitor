import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MyText,MySecondText} from './MyCustomTexts';

const myCustomView = props =>(
    <View style={styles.container} {...props}>
        <View style={styles.first}>
            <MyText>{props.first}</MyText>
        </View>
        <View style={styles.second}>
            <MySecondText>{props.second}</MySecondText>
        </View>
    </View>
);
const styles=StyleSheet.create({
   container:{flexDirection:'row', width:'100%'},
    first:{width:'40%'},
    second:{width:'60%'}
});
export  default  myCustomView;