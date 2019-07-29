import {createAction} from 'redux-actions';

export const setHttpClient = createAction('SET_HTTP_CLIENT');
export const logout = createAction('LOGOUT');
export const isRequesting = createAction('IS_REQUESTING');
export const raiseError = createAction('RAISE_ERROR');
export const loginUserSuccess = createAction('LOGIN_USER_SUCCESS');