import { createStore } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {

    modalReducer: {
        loginbox: false
    },

    userReducer: {
        info: null
    },

}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;
