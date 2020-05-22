import { POST_USER_START, POST_USER_SUCCESS, POST_USER_ERROR, ActionTypes } from '../types';

export const postUserStart = (): ActionTypes => ({
    type: POST_USER_START,
});

export const postUserSuccess = (success: boolean): ActionTypes => ({
    type: POST_USER_SUCCESS,
    payload: success,
});

export const postUserError = (error: string): ActionTypes => ({
    type: POST_USER_ERROR,
    payload: error,
});
