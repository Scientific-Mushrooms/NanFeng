var userReducer = (state = {}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return { ...state, user: action.info };

        case 'LOGOUT':
            return { ...state, user: null };

        default:
            return state;
    }
}

export default userReducer;
