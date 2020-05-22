import axios from 'axios';
import { getSingleUserStart, getSingleUserSuccess, getSingleUserError } from './getSingleUserActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'http://77.120.241.80:8911/api/';

export const getSingleUser = (dispatch: Dispatch<any>, id: string): void => {
    dispatch(getSingleUserStart());

    axios.get(`/user/${id}`).then((response) => {
        if (response.status === 200) {
            dispatch(getSingleUserSuccess(response.data));
        } else {
            dispatch(getSingleUserError('Network response error'));
        }
    });
};