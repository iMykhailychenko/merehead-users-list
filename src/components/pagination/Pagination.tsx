import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IState from '../../redux/rootState';

const Pagination: React.FC<{ page: number }> = ({ page }) => {
    const maxPage = useSelector((state: IState) => state.users.pagination.maxPage);
    const totalUsers = useSelector((state: IState) => state.users.pagination.total);

    // max page array / generate pagination links
    const links = new Array(maxPage).fill(1);

    return totalUsers > 5 ? (
        <nav className="py-4">
            <ul className="pagination pagination-lg justify-content-center">
                {links.map((_, index) => (
                    <li key={index} className={`page-item${page === index + 1 ? ' active' : ''}`}>
                        <Link to={`/?page=${index + 1}`} className="page-link">
                            {index + 1}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    ) : null;
};

export default Pagination;
