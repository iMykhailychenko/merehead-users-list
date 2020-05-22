import { combineReducers } from 'redux';
import { GET_SINGLE_USER_START, GET_SINGLE_USER_SUCCESS, GET_SINGLE_USER_ERROR, ActionTypes } from '../types';
import { IUser } from '../../interfaces/interfaces';

const loadingSingleUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case GET_SINGLE_USER_START:
            return true;

        case GET_SINGLE_USER_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesSingleUserReducer = (items: IUser | {} = {}, action: ActionTypes): IUser | {} => {
    switch (action.type) {
        case GET_SINGLE_USER_SUCCESS:
            return action.payload;

        default:
            return items;
    }
};

const errorSingleUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case GET_SINGLE_USER_START:
        case GET_SINGLE_USER_SUCCESS:
            return '';

        case GET_SINGLE_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const getSingleUserReducer = combineReducers({
    loading: loadingSingleUserReducer,
    user: succesSingleUserReducer,
    error: errorSingleUserReducer,
});
