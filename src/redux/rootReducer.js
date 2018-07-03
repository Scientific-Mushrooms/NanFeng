import { combineReducers } from 'redux';

import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'

export default combineReducers({
    modalReducer,
    userReducer,
});