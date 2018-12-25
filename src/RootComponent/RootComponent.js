import React, {Component} from 'react';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';
import {persistor, store} from '../store/configureStore';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingView from '../Screens/LoadingView';


export default  class  RootComponent extends Component {
    render(){
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingView />} persistor={persistor}>
                    <AppContainer />
                </PersistGate>
            </Provider>
        );
    }
};
