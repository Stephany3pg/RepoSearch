
import { configureStore } from '@reduxjs/toolkit'
import repoReducer from '../reducers/repoReducer';

const createStore = () => {
    return configureStore({ reducer: repoReducer });
    }
    
export default createStore;