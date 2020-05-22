import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUser } from '../../redux/getSingleUser/getSingleUserOperations';
import { IUser } from '../../interfaces/interfaces';
import IState from '../../redux/rootState';

// components
import Jumbotron from '../../components/jumbotron/Jumbotron';
import FormComponent from '../../components/form-component/FormComponent';

interface Props {}

const EditUser: React.FC<Props> = () => {
    const user: IUser = useSelector((state: IState) => state.getUser.user);
    const dispatch = useDispatch();
    const params: { id: string } = useParams();

    useEffect(() => {
        getSingleUser(dispatch, params.id);
    }, [dispatch, params]);

    return (
        <>
            <Jumbotron>
                <h1 className="display-4">Update user information! &#9997;</h1>
                <hr className="my-4" />
                <p className="lead mb-4">
                    On this page you can update a user information. Attention! All fields are required.
                </p>
                <Link to="/" className="btn btn-link pl-0">
                    Back to home page
                </Link>
            </Jumbotron>

            {user.id ? (
                <FormComponent
                    values={{ name: user.name, surname: user.surname, desc: user.desc }}
                    id={user.id}
                    update={true}
                />
            ) : (
                <>
                    <p className="my-4 text-center">Opsss... Something went wrong</p>
                    <Link to="/" className="link text-center d-block mb-4">
                        Go to the home page
                    </Link>
                </>
            )}
        </>
    );
};

export default EditUser;
