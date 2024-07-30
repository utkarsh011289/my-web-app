import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appReducer';
import logger from 'redux-logger';
import { sagaReducer } from './sagaReducer';
import createSagaMiddleware from  'redux-saga'
import rootSaga from './actions/rootSaga';


const sagaMiddleware=createSagaMiddleware();

export   const appStore=configureStore({

    reducer:{
        appReducer,
        sagaReducer
    },

    middleware : () => {

    return [logger , sagaMiddleware]
    }
});

sagaMiddleware.run(rootSaga)