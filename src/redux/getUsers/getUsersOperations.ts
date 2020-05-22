import axios from 'axios';
import { getUsersStart, getUsersSuccess, getUsersError } from './getUsersActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/';

export const getUsers = (dispatch: Dispatch<any>): (() => void) => (): void => {
    dispatch(getUsersStart());

    axios.get('/users').then((response) => {
        if (response.status === 200) {
            dispatch(getUsersSuccess(response.data));
        } else {
            dispatch(getUsersError('Network response error'));
        }
    });
};