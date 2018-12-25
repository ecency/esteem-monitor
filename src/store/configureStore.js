import { createStore,combineReducers , compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import changeServer from './reducer/changeServer';
const rootReducer = combineReducers({
    server:changeServer
});
let composeEnhancers=compose;
if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
};
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);

// import {createStore,combineReducers} from 'redux';
// import changeServer from './reducer/changeServer';
//
// const rootReducer = combineReducers({
//     server:changeServer
// });
//
// const configureStore = () => {
//     return createStore(rootReducer);
// };
//
// export default configureStore;