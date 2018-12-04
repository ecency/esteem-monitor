import React from 'react';
import {View,Text} from 'react-native';
const LoadingView =()=> {
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>Loading...Please wait</Text>
        </View>
    );
};

export default LoadingView;