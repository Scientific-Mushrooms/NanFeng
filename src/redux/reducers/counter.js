
var counter = (state = {}, action) => {
    
    switch (action.type) {
        case 'INCREASE':
            return { ...state, count: state.count + state.factor };
        case 'DECREASE':
            return { ...state, count: state.count - state.factor };
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
}

export default counter;