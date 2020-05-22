import { IUser } from '../../interfaces/interfaces';
import { GET_SINGLE_USER_START, GET_SINGLE_USER_SUCCESS, GET_SINGLE_USER_ERROR, ActionTypes } from '../types';

export const getSingleUserStart = (): ActionTypes => ({
    type: GET_SINGLE_USER_START,
});

export const getSingleUserSuccess = (posts: IUser): ActionTypes => ({
    type: GET_SINGLE_USER_SUCCESS,
    payload: posts,
});

export const getSingleUserError = (error: string): ActionTypes => ({
    type: GET_SINGLE_USER_ERROR,
    payload: error,
});
