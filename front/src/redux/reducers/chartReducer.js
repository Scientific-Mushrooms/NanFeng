var chartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RANK_CHART_SET':
            return { ...state, rankChart: action.data };
        default:
            return state;
    }
}

export default chartReducer;