import { configureStore, combineReducers } from '@reduxjs/toolkit';
import repoReducer from '../reducers/repoReducer';

const rootReducer = combineReducers({ repositories: repoReducer }
);
const createStore = () => {
    return configureStore(rootReducer);
}
export default createStore;