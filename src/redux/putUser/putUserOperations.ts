import axios from 'axios';
import { putUserStart, putUserSuccess, putUserError } from './putUserActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'http://77.120.241.80:8911/api/';

export const putUser = (
    dispatch: Dispatch<any>,
    id: number,
    name: string,
    surname: string,
    desc: string,
): void => {
    dispatch(putUserStart());

    axios
        .put(`/user/${id}`, {
            name,
            surname,
            desc,
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(putUserSuccess(true));

                // remove alert about success operation
                setTimeout(() => {
                    dispatch(putUserSuccess(false));
                }, 1500);
            } else {
                dispatch(putUserError('Network response error'));
            }
        });
};
