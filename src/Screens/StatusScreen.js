import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator, StyleSheet, WebView, ScrollView} from 'react-native';
import {Header, Title, Button, Right, Left, Body} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as dsteem from 'dsteem';
import MySepView from '../components/SeparotorView'
import {notificationListener, notificationOpenedListener} from '../components/Firebase/fbConfig';
import MyView from '../components/MyView';
import htmlContentDark from '../components/StatusScreenUI/htmlContentDark';
import htmlContentLight from '../components/StatusScreenUI/htmlContentLight';
import globalStyles from '../GlobalStyles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const fetchdata = null;
const fetchMarketInfo = null;

class StatusScreen extends Component {
    state = {
        CurrencyInfo: null,
        source: [],
        opacity: 0,
    };
    handleMarketInfo = async () => {
        try {
            const data = await fetch(this.props.marketDataUrl);
            const json = await data.json();
            this.setState({
                CurrencyInfo: json,
            })
        } catch (e) {
            alert("Please check your internet connection and reload the page")
        }

    };

    componentWillMount() {
        this.fetchData();
        this.handleMarketInfo();
        fetchdata = setInterval(() => this.fetchData(), 3000);
        fetchMarketInfo = setInterval(() => this.handleMarketInfo(), 30000);
    }

    componentWillUnmount() {
        clearInterval(fetchdata);
        clearInterval(fetchMarketInfo);
    }

    fetchData = async () => {
        try {
            this.setState({
                opacity: 1
            });
            const client = new dsteem.Client(this.props.serverUrl);
            const data1 = await client.database.getDynamicGlobalProperties();
            this.setState({
                opacity: 0,
                source: data1
            });
        }
        catch (e) {
            alert("Please check your internet connection and reload the page")
        }
    };

    render() {
        let isDarkTeme;
        isDarkTeme = this.props.mode !== 'day';
        return (
            <View style={globalStyles.contentDashboard}>
                <Header style={globalStyles.headers}>
                    <Left/>
                    <Body>
                    <Title style={globalStyles.headerText}>Dashboard</Title>
                    </Body>
                    <Right style={{alignItems: "center", justifyContent: 'flex-end'}}>
                        <ActivityIndicator
                            size={35}
                            color={styles.$activityIndicatorColor}
                            animating={true}
                            style={{height: 80, marginTop: 10, opacity: this.state.opacity}}
                        />
                        <Button transparent
                                onPress={() => this.fetchData()}
                        >
                            <FontAwesome
                                size={22}
                                name="refresh"
                                color={styles.$headerButton}
                            />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <View>
                        <MySepView
                            first={"Block:"}
                            second={this.state.source.head_block_number}
                        />
                        <MySepView
                            first={"Time:"}
                            second={this.state.source.time}
                        />
                        <MySepView
                            first={"Witness:"}
                            second={this.state.source.current_witness}
                        />
                        <MySepView
                            first={"Steem Supply:"}
                            second={this.state.source.current_supply}
                        />
                        <MySepView
                            first={"SBD Supply:"}
                            second={this.state.source.current_sbd_supply}
                        />
                        {
                            this.state.CurrencyInfo && (
                                <MyView
                                    sbd_usd_price={this.state.CurrencyInfo.sbd.quotes.usd.price}
                                    sbd_usd_change={this.state.CurrencyInfo.sbd.quotes.usd.percent_change}
                                    sbd_usd_update={this.state.CurrencyInfo.sbd.quotes.usd.last_updated}
                                    sbd_btc_price={this.state.CurrencyInfo.sbd.quotes.btc.price}
                                    sbd_btc_change={this.state.CurrencyInfo.sbd.quotes.btc.percent_change}
                                    sbd_btc_update={this.state.CurrencyInfo.sbd.quotes.btc.last_updated}
                                    steem_usd_price={this.state.CurrencyInfo.steem.quotes.usd.price}
                                    steem_usd_change={this.state.CurrencyInfo.steem.quotes.usd.percent_change}
                                    steem_usd_update={this.state.CurrencyInfo.steem.quotes.usd.last_updated}
                                    steem_btc_price={this.state.CurrencyInfo.steem.quotes.btc.price}
                                    steem_btc_change={this.state.CurrencyInfo.steem.quotes.btc.percent_change}
                                    steem_btc_update={this.state.CurrencyInfo.steem.quotes.btc.last_updated}
                                />
                            )
                        }
                    </View>
                    <View style={styles.webViewStyle}>
                        <WebView
                            style={styles.webViewContentStyle}
                            originWhitelist={['*']}
                            source={{
                                html: isDarkTeme ? htmlContentDark : htmlContentLight
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    $headerButton:'$headerButtonColor',
    $activityIndicatorColor:"#324192",
    webViewStyle:{height: 200, width: '100%',paddingTop:30},
    webViewContentStyle:{height: '100%', width: '100%',backgroundColor:'$contentBackGroundColor'} ,
});

const mapStateToProps = state => {
    return {
        serverUrl: state.server.serverUrl,
        marketDataUrl: state.server.marketDataUrl,
        mode:state.server.mode
    };
};
export default connect(mapStateToProps)(StatusScreen);