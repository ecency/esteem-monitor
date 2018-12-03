import React from 'react';
import PureChart from 'react-native-pure-chart';
const myChart=props=>(
    <PureChart type='line' data={props.data}/>
);

export default myChart;