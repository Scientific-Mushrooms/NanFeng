export const increase = () => ({ type: 'INCREASE' });

export const decrease = () => ({ type: 'DECREASE' });

export const reset = () => ({ type: 'RESET' });

export const login = (info) => ({ type: 'LOGIN', info: info });

export const logout = () => ({ type: 'LOGOUT'});

export const loginBoxShow = { type: 'LOGINBOX_SHOW' };

export const loginBoxHide = { type: 'LOGINBOX_HIDE' };

export const taskDetailBoxShow = () => ({ type: 'TASK_DETAIL_BOX_SHOW', taskDetailBox: true});

export const taskDetailBoxHide = () => ({ type: 'TASK_DETAIL_BOX_HIDE', taskDetailBox: false });

export const taskDetailDataSet = (data) => ({ type: 'TASK_DETAIL_DATA_SET', taskDetailData: data });

export const pendingSet = (data) => ({ type: 'PENDING_SET', data: data });

export const progressingSet = (data) => ({ type: 'PROGRESSING_SET', data: data });

export const finishedSet = (data) => ({ type: 'FINISHED_SET', data: data });

export const bugsSet = (data) => ({ type: 'BUGS_SET', data: data });

export const dataForTaskChartSet = (data) => ({ type: 'DATA_FOR_TASK_CHART_SET', data: data });
