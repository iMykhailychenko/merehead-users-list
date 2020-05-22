import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/deleteUser/deleteUserOperations';

interface Props {
    users: {
        id: number;
        name: string;
        surname: string;
        desc: string;
    }[];
}

const UserCard: React.FC<Props> = ({ users }) => {
    const dispatch = useDispatch();

    const handleClick = (id: number): void => {
        deleteUser(dispatch, id);
    };

    return !!users.length ? (
        <ul className="row my-4">
            {users.map(({ name, surname, desc, id }) => (
                <li className="col-12 col-md-6 p-3" key={id}>
                    <div className="card card-body p-4">
                        <h5 className="card-title">{name}</h5>

                        <h6 className="card-subtitle mb-2 text-muted">{surname}</h6>

                        <p className="card-text">{desc.length > 125 ? `${desc.slice(0, 125)} ...` : desc}</p>

                        <Link to={`/edit-user/${id}`} className="btn btn-link pl-0 d-block text-left">
                            Edit user
                        </Link>

                        <button className="btn btn-link pl-0 d-block text-left" onClick={() => handleClick(id)}>
                            Delete user
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <div className="card-empty py-4">
            <p>Opss... There is no user. But you can create new user here</p>
            <Link to="/new-user" className="card-link">
                Add new user
            </Link>
        </div>
    );
};
export default UserCard;
