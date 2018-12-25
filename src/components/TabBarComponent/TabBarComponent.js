import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';


class TabBarComponent extends Component {
    state = {
        isStatusScreenActive:true,
        isWitnessScreenActive:false,
        isSettingScreenActive:false
    };

    handleStatusButton =()=>{
        const {navigation} = this.props;
        navigation.navigate('Status');
        this.setState({
            isStatusScreenActive:true,
            isWitnessScreenActive:false,
            isSettingScreenActive:false
        });

    };
    handleWitnessButton =()=>{
        const {navigation} = this.props;
        navigation.navigate('Witnesses');
        this.setState({
            isStatusScreenActive:false,
            isWitnessScreenActive:true,
            isSettingScreenActive:false
        });
    };
    handleSettinsButton=()=>{
        const {navigation} = this.props;
        navigation.navigate('Settings');
        this.setState({
            isStatusScreenActive:false,
            isWitnessScreenActive:false,
            isSettingScreenActive:true
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.handleStatusButton()}>
                    <View style={styles.tabButton}>
                        <Ionicons
                            name='logo-bitcoin'
                            size={20}
                            color={this.state.isStatusScreenActive ? styles.$textColor :styles.$textInActiveColor}/>
                        <Text style={this.state.isStatusScreenActive ? styles.tabTextActive : styles.tabTextInActive}>
                            Status
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleWitnessButton() }>
                    <View style={styles.tabButton}>
                        <Ionicons
                            name='ios-pulse'
                            size={20}
                            color={this.state.isWitnessScreenActive ? styles.$textColor : styles.$textInActiveColor}/>
                        <Text style={this.state.isWitnessScreenActive ? styles.tabTextActive : styles.tabTextInActive}>
                            Witness
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleSettinsButton()}>
                    <View style={styles.tabButton}>
                        <Ionicons
                            name='md-settings'
                            size={20}
                            color={ this.state.isSettingScreenActive ? styles.$textColor : styles.$textInActiveColor}/>
                        <Text style={this.state.isSettingScreenActive ? styles.tabTextActive : styles.tabTextInActive}>
                            Settings
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TabBarComponent;