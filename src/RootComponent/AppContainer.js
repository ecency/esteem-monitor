import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import App from './App';
import EStyleSheet from "react-native-extended-stylesheet";
import  darkTheme from '../GlobalStyles/darkTheme';
import lightTheme from '../GlobalStyles/lightTheme';
import styles from '../GlobalStyles/styles';

class AppContainer extends Component {
    componentWillMount(){
        this.changeTheme(this.props.mode);
    }
    componentWillReceiveProps(nextProps) {
        const { mode: _mode} = this.props;
        if (_mode !== nextProps.mode ) {
            console.log('forceUpdated');
            this.changeTheme(nextProps.mode)
        }
    }
    changeTheme=(mode)=>{
        if (mode ==='day'){
            EStyleSheet.build(lightTheme);
            console.log(' Tab bar color from light theme:', styles.$tabColor)
        } else {
            EStyleSheet.build(darkTheme);
            console.log(' Tab bar color from dark theme:', styles.$tabColor)
        }
    };

    render(){
        return <App/>;
    }
}

const mapStateToProps = state => {
    return {
        mode: state.server.mode
    };
};
export default connect(mapStateToProps)(AppContainer);
