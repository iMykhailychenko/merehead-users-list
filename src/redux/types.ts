import { IUser } from '../interfaces/interfaces';

// fetch all users
export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

// fetch single user
export const GET_SINGLE_USER_START = 'GET_SINGLE_USER_START';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_ERROR = 'GET_SINGLE_USER_ERROR';

// push user
export const POST_USER_START = 'POST_USER_START';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_ERROR = 'POST_USER_ERROR';

// delete user
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

// edit user
export const PUT_USER_START = 'PUT_USER_START';
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';
export const PUT_USER_ERROR = 'PUT_USER_ERROR';


// Fetch all users - Action types
interface GetUsersStart {
    type: typeof GET_USERS_START;
    payload?: boolean;
}
interface GetUsersSuccess {
    type: typeof GET_USERS_SUCCESS;
    payload: IUser[];
}
interface GetUsersError {
    type: typeof GET_USERS_ERROR;
    payload: string;
}

// Fetch single user - Action types
interface GetSingleUserStart {
    type: typeof GET_SINGLE_USER_START;
    payload?: boolean;
}
interface GetSingleUserSuccess {
    type: typeof GET_SINGLE_USER_SUCCESS;
    payload: IUser;
}
interface GetSingleUserError {
    type: typeof GET_SINGLE_USER_ERROR;
    payload: string;
}

// Push user - Action types
interface PostUserStart {
    type: typeof POST_USER_START;
    payload?: boolean;
}
interface PostUserSuccess {
    type: typeof POST_USER_SUCCESS;
    payload: boolean;
}
interface PostUserError {
    type: typeof POST_USER_ERROR;
    payload: string;
}

// Delete user - Action types
interface DeleteUserStart {
    type: typeof DELETE_USER_START;
    payload?: boolean;
}
interface DeleteUserSuccess {
    type: typeof DELETE_USER_SUCCESS;
    payload: number;
}
interface DeleteUserError {
    type: typeof DELETE_USER_ERROR;
    payload: string;
}

// Edit user - Action types
interface PutUserStart {
    type: typeof PUT_USER_START;
    payload?: boolean;
}
interface PutUserSuccess {
    type: typeof PUT_USER_SUCCESS;
    payload: boolean;
}
interface PutUserError {
    type: typeof PUT_USER_ERROR;
    payload: string;
}


export type ActionTypes =
    | GetUsersStart
    | GetUsersSuccess
    | GetUsersError
    | GetSingleUserStart
    | GetSingleUserSuccess
    | GetSingleUserError
    | PostUserStart
    | PostUserSuccess
    | PostUserError
    | DeleteUserStart
    | DeleteUserSuccess
    | DeleteUserError
    | PutUserStart
    | PutUserSuccess
    | PutUserError;

export interface Dispatch<S> {
    <A extends ActionTypes>(action: A): A;
}
