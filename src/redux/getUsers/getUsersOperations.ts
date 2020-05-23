import axios from 'axios';
import { getUsersStart, getUsersSuccess, getUsersError } from './getUsersActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/';

export const getUsers = (dispatch: Dispatch<any>, setLoading: (loading: boolean) => void): void => {
    dispatch(getUsersStart());

    axios.get('/users').then((response) => {
        if (response.status === 200) {
            dispatch(getUsersSuccess(response.data));

            // remove preloader
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            dispatch(getUsersError('Network response error'));
        }
    });
};
