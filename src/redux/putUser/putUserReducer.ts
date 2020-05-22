import { combineReducers } from 'redux';
import { PUT_USER_START, PUT_USER_SUCCESS, PUT_USER_ERROR, ActionTypes } from '../types';

const loadingUpdateReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case PUT_USER_START:
            return true;

        case PUT_USER_SUCCESS:
        case PUT_USER_ERROR:
            return false;

        default:
            return loading;
    }
};

const successUpdateReducer = (success: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case PUT_USER_START:
        case PUT_USER_ERROR:
            return false;

        case PUT_USER_SUCCESS:
            return action.payload;

        default:
            return success;
    }
};

const errorUpdateReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case PUT_USER_START:
        case PUT_USER_SUCCESS:
            return '';

        case PUT_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const putUserReducer = combineReducers({
    loading: loadingUpdateReducer,
    success: successUpdateReducer,
    error: errorUpdateReducer,
});
