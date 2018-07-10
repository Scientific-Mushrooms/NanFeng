var squadReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SQUAD_SET':
            return { ...state, squad: action.squad };
        default:
            return state;
    }
}

export default squadReducer;