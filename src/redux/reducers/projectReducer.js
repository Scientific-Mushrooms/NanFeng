var projectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PENDING_SET':
            return { ...state, pending: action.data };
        case 'PROGRESSING_SET':
            return { ...state, progressing: action.data };
        case 'FINISHED_SET':
            return { ...state, finished: action.data }
        case 'BUGS_SET':
            return { ...state, bugs: action.data }
        case 'DATA_FOR_TASK_CHART_SET':
            return { ...state, dataForTaskChart: action.data }
        default:
            return state;
    }
}

export default projectReducer;