import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appReducer';
import logger from 'redux-logger';
import { sagaReducer } from './sagaReducer';

export   const appStore=configureStore({

    reducer:{
        appReducer,
        sagaReducer
    },

    middleware : () => {

    return [logger]
    }
});