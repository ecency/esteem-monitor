import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'native-base';
import {connect} from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

class ItemView extends React.Component {
    state={
      rerender:false
    };
    componentWillReceiveProps(nextProps) {
        const { mode: _mode} = this.props;
        if (_mode !== nextProps.mode ) {
            this.setState({
                rerender:!this.state.rerender
            });
        }
    }
    renderCheckbox() {
        if (this.props.subscribed) {
            return (
                <TouchableOpacity
                    onPress={() => this.props.onDelete()}
                >
                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <CheckBox
                            checked={this.props.subscribed}
                            onPress={() => this.props.onDelete()}
                        />
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={() => this.props.onSubscribe()}
                >
                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <CheckBox
                            checked={this.props.subscribed}
                            onPress={() => this.props.onSubscribe()}
                            color={styles.$defaultText}
                        />
                    </View>
                </TouchableOpacity>
            );
        }
    }

    render() {
        let now = new Date();
        let early = new Date(this.props.fourth);
        let duration = now.getTime() - early.getTime();
        return (
            <View  style={styles.content} {...this.props}>
                <TouchableOpacity onPress={this.props.onClick}
                                  style={{width: "80%", flexDirection: 'row'}}
                >

                    <View style={styles.content1}>
                        <View style={styles.viewContent}>
                            <Text
                                style={{color: styles.$defaultText}}>{this.props.first.toString().slice(0, 2)}</Text>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <Text style={{
                            color: styles.$defaultText,
                            fontSize: 12
                        }}>{this.props.second.toString().toUpperCase()}</Text>
                        <Text
                            style={{fontSize: 11, color: styles.$witnessListSecondaryText}}>{this.props.third}</Text>
                        <Text style={{
                            fontSize: 11,
                            color: styles.$witnessListSecondaryText
                        }}>{Math.round(duration / (3600 * 1000)) + ' hour ago'}</Text>
                    </View>
                    <View style={styles.content3}>
                        <Text style={{
                            color: styles.$defaultText,
                            fontSize: 12
                        }}>{(parseInt(this.props.fifth.toString()) / 1000000000000000).toFixed(1) + " PV"}</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: styles.$witnessListSecondaryText
                            }}>{"v. " + this.props.sixth}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <FontAwesomeIcon
                                name="warning"
                                size={11}
                            />
                            <Text style={{
                                fontSize: 11,
                                color: styles.$witnessListSecondaryText
                            }}>{this.props.seventh}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.content4}>
                    {this.renderCheckbox()}
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    $defaultText: '$defaultTextColor',
    $witnessListSecondaryText: '$witnessListSecondaryTextColor',
    viewContent: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '$contentBackGroundColor',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '$circleWitnessScreen'
    },

    content: {
        flexDirection: 'row', width: '100%',
        height:60,
        borderColor:'#CED0CE',
        borderBottomWidth:1,
    },
    content1: {width: '25%', alignItems: 'center', justifyContent: 'center'},
    content2: {width: '45%', alignItems: 'center', justifyContent: 'center'},
    content3: {width: '30%', alignItems: 'center', justifyContent: 'center'},
    content4: {width: '20%', alignItems: 'center', justifyContent: 'center'}

});
const mapStateToProps = state => {
    return {
        mode:state.server.mode
    };
};
export default connect(mapStateToProps)(ItemView);

