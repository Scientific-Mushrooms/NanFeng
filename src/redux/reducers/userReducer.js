var userReducer = (state = {}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return { ...state, user: action.user };

        case 'LOGOUT':
            return { ...state, user: null };

        case 'USER_UPDATE':
            return { ...state, user: action.user };

        default:
            return state;
    }
}

export default userReducer;
