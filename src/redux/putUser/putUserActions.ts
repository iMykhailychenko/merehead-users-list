import { PUT_USER_START, PUT_USER_SUCCESS, PUT_USER_ERROR, ActionTypes } from '../types';

export const putUserStart = (): ActionTypes => ({
    type: PUT_USER_START,
});

export const putUserSuccess = (success: boolean): ActionTypes => ({
    type: PUT_USER_SUCCESS,
    payload: success,
});

export const putUserError = (error: string): ActionTypes => ({
    type: PUT_USER_ERROR,
    payload: error,
});
