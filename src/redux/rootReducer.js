import { combineReducers } from 'redux';

import identityReducer from './reducers/identityReducer'
import notificationReducer from './reducers/notificationReducer';


export default combineReducers({
    identityReducer,
    notificationReducer,
});