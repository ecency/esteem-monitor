import { createStore,combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import changeServer from './reducer/changeServer';
const rootReducer = combineReducers({
    server:changeServer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
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