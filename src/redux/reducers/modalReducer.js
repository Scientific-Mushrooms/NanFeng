var screenReducer = (state = {}, action) => {
    
    switch (action.type) {
        case 'LOGINBOX_SHOW':
            return { ...state, loginbox: true };
        case 'LOGINBOX_HIDE':
            return { ...state, loginbox: false };
        default:
            return state;
    }
}

export default screenReducer;