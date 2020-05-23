import axios from 'axios';
import { getSingleUserStart, getSingleUserSuccess, getSingleUserError } from './getSingleUserActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/';

export const getSingleUser = (dispatch: Dispatch<any>, id: string, setLoading: (loading: boolean) => void): void => {
    dispatch(getSingleUserStart());

    axios.get(`/user/${id}`).then((response) => {
        if (response.status === 200) {
            dispatch(getSingleUserSuccess(response.data));

            // remove preloader
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            dispatch(getSingleUserError('Network response error'));
        }
    });
};
