export const increase = () => ({ type: 'INCREASE' });

export const decrease = () => ({ type: 'DECREASE' });

export const reset = () => ({ type: 'RESET' });

export const login = (info) => ({ type: 'LOGIN', info: info });

export const logout = () => ({ type: 'LOGOUT'});

export const loginBoxShow = { type: 'LOGINBOX_SHOW' };

export const loginBoxHide = { type: 'LOGINBOX_HIDE' };
