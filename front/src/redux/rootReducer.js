import { combineReducers } from 'redux';

import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer';


export default combineReducers({
    modalReducer,
    userReducer,
    projectReducer,
});