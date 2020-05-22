import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import PageTemplate from '../page-template/PageTemplate';

// pages
const AsyncMain = lazy(() => import('../../pages/home/Home' /* webpackChunkName: "home-page" */));
const AsyncNewUser = lazy(() => import('../../pages/new-user/NewUser' /* webpackChunkName: "new-user-page" */));
const AsyncEditUser = lazy(() => import('../../pages/edit-user/EditUser' /* webpackChunkName: "edit-user-page" */));

const App: React.FC<{}> = () => (
    <PageTemplate>
        <Suspense fallback={<h2>Loading ...</h2>}>
            <Switch>
                <Route path="/" exact component={AsyncMain} />
                <Route path="/new-user" component={AsyncNewUser} />
                <Route path="/edit-user/:id" component={AsyncEditUser} />
            </Switch>
        </Suspense>
    </PageTemplate>
);

export default App;
