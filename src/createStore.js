import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import { logger } from 'redux-logger';
import * as reducers from './reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
        applyMiddleware(
            logger,
            routerMiddleware(history)
        )
    );
}
