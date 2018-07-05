var screenReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGINBOX_SHOW':
            return { ...state, loginbox: true };
        case 'LOGINBOX_HIDE':
            return { ...state, loginbox: false };
        case 'TASK_DETAIL_BOX_SHOW':
            return { ...state, taskDetailBox: true}
        case 'TASK_DETAIL_BOX_HIDE':
            return { ...state, taskDetailBox: false}
        case 'TASK_DETAIL_DATA_SET':
            return { ...state, taskDetailData: action.taskDetailData }
        default:
            return state;
    }
}

export default screenReducer;