var identityReducer = (state = {}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return { ...state, user: action.user, instructor: action.instructor, student: action.student };

        case 'LOGOUT':
            return { ...state, user: null };

        case 'USER_UPDATE':
            return { ...state, user: action.user };

        case 'SET_INSTRUCTOR':
            return { ...state, instructor: action.instructor };

        case 'SET_STUDENT':
            return { ...state, student: action.student };

        case 'SET_USER':
            return { ...state, user: action.user };

        case 'REMOVE_INSTRUCTOR':
            return { ...state, instructor: null};

        case 'UPDATE_INSTRUCTOR':
            return { ...state, instructor: action.instructor };

        case 'CLEAR':
            return { ...state, instructor: null, user: null, student: null };

        default:
            return state;
    }
}

export default identityReducer;
