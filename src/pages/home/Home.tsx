import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/getUsers/getUsersOperations';
import IState from '../../redux/rootState';

// components
import Jumbotron from '../../components/jumbotron/Jumbotron';
import UserCard from '../../components/user-card/UserCard';
import Pagination from '../../components/pagination/Pagination';

// utils
import queryString from 'query-string';


const Home: React.FC<{}> = () => {
    // get all users
    const users = useSelector((state: IState) => state.users.items);
    const dispatch = useDispatch();

    // set preloader
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        //preloader
        setLoading(true);

        getUsers(dispatch, setLoading);
    }, [dispatch]);

    // get current page
    const maxPage = useSelector((state: IState) => state.users.pagination.maxPage);
    const location = useLocation();
    const search = queryString.parse(location.search);
    // this will fix bug when the page num from slug is bigger then max page num or when the slug is empty
    const page = !search.page ? 1 : Number(search.page) > maxPage ? maxPage : Number(search.page);

    // get users per page
    const usersPerPage = users.slice((page - 1) * 5, (page - 1) * 5 + 5);

    return (
        <>
            <Jumbotron>
                <h1 className="display-4">Hello! &#128400;</h1>
                <hr className="my-4" />
                <p className="lead mb-4">
                    In this page you have the ability to read / create / delete / update the users list. Technology
                    stack for this app: react, redux, thunk, axios.
                </p>
                <Link to="/new-user" className="btn btn-primary btn-lg">
                    New user
                </Link>
            </Jumbotron>

            {loading ? (
                <p className="my-4 text-center">Loading ...</p>
            ) : (
                <>
                    <UserCard users={usersPerPage} />
                    <Pagination page={page} />
                </>
            )}
        </>
    );
};

export default Home;
