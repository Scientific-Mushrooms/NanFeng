import { combineReducers } from 'redux';

import counter from './reducers/counter'
import user from './reducers/userReducer'
import photos from './reducers/photos'

export default combineReducers({
    counter,
    user,
    photos,
});