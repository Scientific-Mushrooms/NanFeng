import { combineReducers } from 'redux';

import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer';
import squadReducer from './reducers/squadReducer';

export default combineReducers({
    modalReducer,
    userReducer,
    projectReducer,
    squadReducer,
});