var identityReducer = (state = {}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return { ...state, user: action.user };

        case 'LOGOUT':
            return { ...state, user: null };

        case 'USER_UPDATE':
            return { ...state, user: action.user };

        case 'SET_INSTRUCTOR':
            return { ...state, instructor: action.instructor };

        case 'REMOVE_INSTRUCTOR':
            return { ...state, instructor: null};

        case 'UPDATE_INSTRUCTOR':
            return { ...state, instructor: action.instructor };

        default:
            return state;
    }
}

export default identityReducer;
