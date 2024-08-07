import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from './reducers/taskReducers';

const persistConfig = {
  key: 'root',                // Key used to store the persisted state in the storage
  storage,                   // Storage engine to use (localStorage by default)
};


// Create a root reducer by combining reducers
const rootReducer = combineReducers({
  tasks: persistReducer(persistConfig, taskReducer),
});

// Create the Redux store using the root reducer and a persistor to manage the persisted state
const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };