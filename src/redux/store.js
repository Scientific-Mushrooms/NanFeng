import { createStore } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {

    counter: {
        count: 10,
        factor: 1
    },

    user: {
        info: null
    },

    photos: {
        photos: []
    }
}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;
