import { combineReducers } from 'redux';
import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_ERROR, DELETE_USER_SUCCESS, ActionTypes } from '../types';
import { IUser } from '../../interfaces/interfaces';

const loadingUsersReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case GET_USERS_START:
            return true;

        case GET_USERS_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesUsersReducer = (items: IUser[] = [], action: ActionTypes): IUser[] => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return action.payload;

        case DELETE_USER_SUCCESS:
            return items.filter((post) => post.id !== action.payload);

        default:
            return items;
    }
};

const errorUsersReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case GET_USERS_START:
        case GET_USERS_SUCCESS:
            return '';

        case GET_USERS_ERROR:
            return action.payload;

        default:
            return error;
    }
};

const initPagination = { total: 0, maxPage: 0 };

const paginationReducer = (
    pagination: { total: number; maxPage: number } = initPagination,
    action: ActionTypes,
): { total: number; maxPage: number } => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { total: action.payload.length, maxPage: Math.ceil(action.payload.length / 5) };

        case DELETE_USER_SUCCESS:
            return { total: pagination.total - 1, maxPage: Math.ceil((pagination.total - 1) / 5) };

        default:
            return pagination;
    }
};

export const getUsersReducer = combineReducers({
    loading: loadingUsersReducer,
    items: succesUsersReducer,
    error: errorUsersReducer,
    pagination: paginationReducer,
});
