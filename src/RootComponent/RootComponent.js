import React, {Component} from 'react';
import App from '../../App';
import {Provider} from 'react-redux';
import {persistor, store} from '../store/configureStore';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingView from '../Screens/LoadingView';


export default  class  RootComponent extends Component {
    render(){
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingView />} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );
    }
};
