import axios from 'axios';
import { deleteUserStart, deleteUserSuccess, deleteUserError } from './deleteUserActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = ' http://77.120.241.80:8911/api/';

export const deleteUser = (dispatch: Dispatch<any>, id: number): void => {
    dispatch(deleteUserStart());

    axios
        .delete(`/user/${id}`)
        .then((response) => {
            if (response.status === 200) {
                dispatch(deleteUserSuccess(id));
            } else {
                deleteUserError('Network response error');
            }
        });
};
