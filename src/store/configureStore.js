import {createStore,combineReducers} from 'redux';
import changeServer from './reducer/changeServer';

const rootReducer = combineReducers({
    server:changeServer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;