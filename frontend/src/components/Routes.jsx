import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login.jsx'
// import Search from '../pages/Search.jsx';
// import Register from '../pages/Register.jsx';
// import Profile from '../pages/Profile.jsx';
// import Music from '../pages/Profile.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                {/* <Route /> */}
                {/* <Route /> */}
                {/* <Route /> */}
                {/* <Route /> */}
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;