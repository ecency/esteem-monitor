import React from 'react';
import {View,Image} from 'react-native';
const LoadingView =()=> {
    return (
        <View style={{flex:1, width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Image
                source={require('./about.png')}
                resizeMode = 'center'
            />
        </View>
    );
};

export default LoadingView;