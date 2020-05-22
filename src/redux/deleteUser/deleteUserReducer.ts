import { combineReducers } from 'redux';
import { DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_ERROR, ActionTypes } from '../types';

const loadingDeleteUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case DELETE_USER_START:
            return true;

        case DELETE_USER_SUCCESS:
        case DELETE_USER_ERROR:
            return false;

        default:
            return loading;
    }
};

const successDeleteUserReducer = (id: number = 0, action: ActionTypes): number => {
    switch (action.type) {
        case DELETE_USER_SUCCESS:
            return action.payload;

        default:
            return id;
    }
};

const errorDeleteUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case DELETE_USER_START:
        case DELETE_USER_SUCCESS:
            return '';

        case DELETE_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const deleteUserReducer = combineReducers({
    loading: loadingDeleteUserReducer,
    userId: successDeleteUserReducer,
    error: errorDeleteUserReducer,
});
