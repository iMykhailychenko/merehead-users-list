import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<{}> = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert alert-secondary">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="">
                    <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">
                        Home page
                    </NavLink>
                </li>

                <li className="">
                    <NavLink to="/new-user" exact className="nav-item nav-link" activeClassName="active">
                        Create new user
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
