var taskReducer = (state = {}, action) => {

    switch (action.type) {

        case 'TASK_SET':
            return { ...state, task: action.task };

        default:
            return state;
    }
}

export default taskReducer;