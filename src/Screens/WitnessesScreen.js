import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Text,
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import {Header, Title, Button, Right, Left, Body, CheckBox} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as dsteem from 'dsteem';
import ItemView from './../components/WitnessScreenUI/ItemView';
import {
    saveSubscription,
    getSubscription,
    deleteSubscription,
} from './../components/ConnectionToServer/serverConfig';
import globalStyles from '../GlobalStyles/styles';
import EStyleSheet from "react-native-extended-stylesheet";

const fcmToken = null;
let subscribedWitnesses = null;

class WitnessesScreen extends Component {
    state = {
        fetching: false,
        witnessList: [],
        subscribed: false,
        subscribedToAll: false,
        rerender:false,
    };

    componentWillMount() {
        this.fetchWitnessList();
    }
    componentWillReceiveProps(nextProps) {
        const { mode: _mode} = this.props;
        if (_mode !== nextProps.mode ) {
            this.setState({
               rerender:!this.state.rerender
            });
        }
    }

    onSubscribe = async (deviceId, item) => {
        await saveSubscription(deviceId, item.owner);
        this.fetchWitnessList();
        ToastAndroid.showWithGravityAndOffset(
            "You subscribed to " + item.owner + " witness",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            20,
            80,
        );
    };
    onDelete = async (deviceId, witness) => {
        await deleteSubscription(deviceId, witness);
        this.fetchWitnessList();
        ToastAndroid.showWithGravityAndOffset(
            "You unsubscribed from  " + witness + " witness",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            20,
            80,
        );
    };
    fetchWitnessList = async () => {
        try {
            this.setState({
                fetching: true,
            });
            fcmToken = await AsyncStorage.getItem('fcmToken');
            if (fcmToken) {
                subscribedWitnesses = await getSubscription(fcmToken);
                if (subscribedWitnesses) {
                    if (subscribedWitnesses.length > 50) {
                        this.setState({
                            subscribedToAll: true
                        })
                    }
                }
            }
            const client = new dsteem.Client(this.props.serverUrl);
            const witnesses = await client.database.call('get_witnesses_by_vote', ["", 70]);
            this.setState({
                witnessList: witnesses,
                fetching: false
            })

        } catch (e) {
            alert('Error. Please reload the page', e)
        }
    };
    ifSubscribed = (witness) => {
        let s = 0;
        if (subscribedWitnesses) {
            for (let i = 0; i < subscribedWitnesses.length; i++) {
                if (witness === subscribedWitnesses[i]) {
                    s++;
                }
            }
        }
        return s > 0;
    };
    handleSubscribeToAll = (deviceId) => {
        this.setState({
            subscribedToAll: !this.state.subscribedToAll
        });
        if (!this.state.subscribedToAll) {
            this.state.witnessList.map((item) => {
                saveSubscription(deviceId, item.owner);
            });
            this.fetchWitnessList();
            ToastAndroid.showWithGravityAndOffset(
                "You subscribed to all witnesses. Please wait.",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                20,
                80,
            );
        } else {
            this.state.witnessList.map((item) => {
                deleteSubscription(deviceId, item.owner);
            });
            this.fetchWitnessList();
            ToastAndroid.showWithGravityAndOffset(
                "You unsubscribed from all witnesses. Please wait.",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                20,
                80,
            );
        }
    };

    render() {
        return (
            <View style={globalStyles.contentWitnessScreen}>
                <Header style={globalStyles.headers}>
                    <Left/>
                    <Body>
                    <Title style={globalStyles.headerText}>Witnesses</Title>
                    </Body>
                    <Right>
                        <ActivityIndicator
                            size="large"
                            color={styles.$activityIndicatorColor}
                            animating={this.state.fetching}
                        />
                        <Button
                            transparent
                            onPress={this.fetchWitnessList}
                        >
                            <FontAwesome
                                size={22}
                                name="refresh"
                                color={styles.$headerButton}
                            />
                        </Button>
                    </Right>
                </Header>
                <View style={{flexDirection: "row", width: "100%", borderBottomWidth: 1,}}>
                    <View style={{width:'80%',alignItems:'flex-end'}}>
                        <Text style={styles.subscribeTextStyle}> Subscribe to all</Text>
                    </View>
                    <View style={{width:'20%'}}>
                        <TouchableOpacity
                            onPress={() => this.handleSubscribeToAll(fcmToken)}
                            style={{alignItems:'center'}}
                        >
                            <CheckBox
                                checked={this.state.subscribedToAll}
                                onPress={() => this.handleSubscribeToAll(fcmToken)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.witnessList &&
                <ScrollView style={{paddingBottom: 30}}>
                    <FlatList
                        data={this.state.witnessList}
                        renderItem={({item}) => (
                            <ItemView
                                first={item.owner.toUpperCase()}
                                second={item.owner}
                                third={item.sbd_exchange_rate.base}
                                fourth={item.last_sbd_exchange_update}
                                fifth={item.votes}
                                sixth={item.running_version}
                                seventh={item.total_missed}
                                eight={item.url}
                                subscribed={this.ifSubscribed(item.owner)}
                                onClick={() => this.props.navigation.navigate('Web', {"url": item.url})}
                                onSubscribe={() => this.onSubscribe(fcmToken, item)}
                                onDelete={() => this.onDelete(fcmToken, item.owner)}
                            />
                        )}
                        keyExtractor={item => item.owner}
                    />
                </ScrollView>
                }
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    $headerButton:'$headerButtonColor',
    $activityIndicatorColor:"#324192",
    subscribeTextStyle:{fontSize: 10, color: '$defaultTextColor'},
});

const mapStateToProps = state => {
    return {
        serverUrl: state.server.serverUrl,
        mode:state.server.mode
    };
};
export default connect(mapStateToProps)(WitnessesScreen);


