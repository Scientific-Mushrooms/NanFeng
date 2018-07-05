import { createStore } from 'redux';
import rootReducer from './rootReducer';

var data1 = [{
    taskKey: 1002,
    title: 'Sign contract for "What are conference organizers afraid of?"',
    type: "pending",
    level: 'hard',
    date: '7.3',
    creatorId: 'clavier'
}]

const preloadedState = {

    modalReducer: {
        loginbox: false,
        taskDetailBox: false,
        taskDetailData: {title: "233"},
    },

    projectReducer: {
        dataForTaskChart: {
            pending: data1,
            progressing: data1,
            finished: data1,
            bugs: data1,
        },
        pending: data1,
        progressing: data1,
        finished: data1,
        bugs: data1,
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
