import { combineReducers } from 'redux';
import { POST_USER_START, POST_USER_SUCCESS, POST_USER_ERROR, ActionTypes } from '../types';

const loadingPostUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case POST_USER_START:
            return true;

        case POST_USER_SUCCESS:
        case POST_USER_ERROR:
            return false;

        default:
            return loading;
    }
};

const successPostUserReducer = (success: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case POST_USER_START:
        case POST_USER_ERROR:
            return false;

        case POST_USER_SUCCESS:
            return action.payload;

        default:
            return success;
    }
};

const errorPostUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case POST_USER_START:
        case POST_USER_SUCCESS:
            return '';

        case POST_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const postUserReducer = combineReducers({
    loading: loadingPostUserReducer,
    success: successPostUserReducer,
    error: errorPostUserReducer,
});
