import { createStore } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {

    modalReducer: {
        loginbox: false,
        taskDetailBox: false,
        taskDetailData: {title: "233"},
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
