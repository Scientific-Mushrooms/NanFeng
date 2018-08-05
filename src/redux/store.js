import { createStore } from 'redux';
import rootReducer from './rootReducer';

const preloadedState = {

    identityReducer: {
        user: null,
        instructor: null,
        student: null,
    },

    notificationReducer: {
        open: false,
        kind: null,
        reason: null,
    }

}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;
