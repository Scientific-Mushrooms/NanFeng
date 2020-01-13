var notificationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return { ...state, open: true, reason: action.reason, kind: action.kind};
        case 'HIDE_NOTIFICATION':
            return { ...state, open: false};
        default:
            return state;
    }
}

export default notificationReducer;