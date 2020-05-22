import { combineReducers } from 'redux';
import { getUsersReducer } from './getUsers/getUsersReducer';
import { getSingleUserReducer } from './getSingleUser/getSingleUserReducer';
import { postUserReducer } from './postUser/postUserReducer';
import { putUserReducer } from './putUser/putUserReducer';
import { deleteUserReducer } from './deleteUser/deleteUserReducer';

const rootReducer = combineReducers({
    users: getUsersReducer,
    getUser: getSingleUserReducer,
    postUser: postUserReducer,
    putUser: putUserReducer,
    deleteUser: deleteUserReducer,
});

export default rootReducer;
