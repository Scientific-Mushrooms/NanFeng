export const increase = () => ({ type: 'INCREASE' });

export const decrease = () => ({ type: 'DECREASE' });

export const reset = () => ({ type: 'RESET' });

export const login = (info) => ({ type: 'LOGIN', info: info });

export const logout = () => ({ type: 'LOGOUT'});

export const  addPhoto = (photos) => ({ type: 'PHOTO_ADD', photos: photos });

export const  cleanPhoto = () => ({ type: 'PHOTO_CLEAN' });
