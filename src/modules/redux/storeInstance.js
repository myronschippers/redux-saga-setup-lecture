import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import * as allReducers from './reducers/all.reducers';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas/watcherSaga';

const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        ...allReducers
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

export default storeInstance;