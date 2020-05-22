import { IUser } from '../interfaces/interfaces';

interface IState {
    users: {
        loading: boolean;
        items: IUser[];
        error: '';
        pagination: {
            total: number;
            maxPage: number;
        };
    };
    getUser: {
        loading: boolean;
        user: IUser;
        error: '';
    };
    postUser: {
        loading: boolean;
        success: boolean;
        error: '';
    };
    deleteUser: {
        loading: boolean;
        userId: number;
        error: '';
    };
    putUser: {
        loading: boolean;
        success: boolean;
        error: '';
    };
}

export default IState;
