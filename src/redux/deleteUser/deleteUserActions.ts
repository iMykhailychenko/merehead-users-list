import { DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_ERROR, ActionTypes } from '../types';

export const deleteUserStart = (): ActionTypes => ({
    type: DELETE_USER_START,
});

export const deleteUserSuccess = (id: number): ActionTypes => ({
    type: DELETE_USER_SUCCESS,
    payload: id,
});

export const deleteUserError = (error: string): ActionTypes => ({
    type: DELETE_USER_ERROR,
    payload: error,
});
