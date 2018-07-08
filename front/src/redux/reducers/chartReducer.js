var chartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHART_SET':
            return { ...state, squad: action.squad };
        default:
            return state;
    }
}

export default chartReducer;