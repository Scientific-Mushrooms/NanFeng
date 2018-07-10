var userReducer = (state = {}, action) => {
    
    switch (action.type) {

        case 'LOGIN':
            return { ...state, info: action.info };

        case 'LOGOUT':
            return { ...state, name: null };

        case 'FOLLOW':
            return { ...state, follow: state.follower + 1};
            
        default:
            return state;
    }
}

export default userReducer;