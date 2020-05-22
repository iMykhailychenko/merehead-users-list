import axios from 'axios';
import { postUserStart, postUserSuccess, postUserError } from './postUserActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'http://77.120.241.80:8911/api/';

export const postUser = (dispatch: Dispatch<any>, name: string, surname: string, desc: string): void => {
    dispatch(postUserStart());

    axios
        .post('/users', {
            name,
            surname,
            desc,
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(postUserSuccess(true));

                // remove alert about success operation
                setTimeout(() => {
                    dispatch(postUserSuccess(false));
                }, 1500);
            } else {
                postUserError('Network response error');
            }
        });
};
