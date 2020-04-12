import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login.jsx'
import Search from './pages/Search.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Music from './pages/Profile.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="search" component={Search} />
                <Route path="register" component={Register} />
                <Route path="profile" component={Profile} />
                <Route path="music" component={Music} />
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;