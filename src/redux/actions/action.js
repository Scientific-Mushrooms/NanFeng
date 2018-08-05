export const login = (user, instructor, student) => ({ type: 'LOGIN', user: user, instructor: instructor, student: student });

export const logout = () => ({ type: 'LOGOUT'});

export const update = (user) => ({ type: 'USER_UPDATE', user: user });


export const show_notification = (kind, reason) => ({ type: 'SHOW_NOTIFICATION', kind: kind, reason: reason});

export const hide_notification = () => ({ type: 'HIDE_NOTIFICATION'});


export const set_instructor = (instructor) => ({type: 'SET_INSTRUCTOR', instructor: instructor})
export const set_student = (student) => ({ type: 'SET_STUDENT', student: student })
export const set_user = (user) => ({ type: 'SET_user', user: user })

export const remove_instructor = () => ({ type: 'REMOVE_INSTRUCTOR' })
export const clear = () => ({ type: 'CLEAR' })