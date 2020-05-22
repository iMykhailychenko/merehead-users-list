import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import PageTemplate from '../page-template/PageTemplate';
import NewUser from '../../pages/new-user/NewUser'
import EditUser from '../../pages/edit-user/EditUser'

// pages
import Home from '../../pages/home/Home';

interface Props {}

const App: React.FC<Props> = () => (
    <PageTemplate>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new-user" component={NewUser} />
            <Route path="/edit-user/:id" component={EditUser} />
        </Switch>
    </PageTemplate>
);

export default App;
