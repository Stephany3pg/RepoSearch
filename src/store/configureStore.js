import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from '../reducers/countReducer';

const rootReducer = combineReducers({ count: countReducer }
);
const createStore = () => {
    return configureStore(rootReducer);
}
export default createStore;