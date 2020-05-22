import { IUser } from '../../interfaces/interfaces';
import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_ERROR, ActionTypes } from '../types';

export const getUsersStart = (): ActionTypes => ({
    type: GET_USERS_START,
});

export const getUsersSuccess = (posts: IUser[]): ActionTypes => ({
    type: GET_USERS_SUCCESS,
    payload: posts,
});

export const getUsersError = (error: string): ActionTypes => ({
    type: GET_USERS_ERROR,
    payload: error,
});
