import React from 'react';
import logo from './logo.svg';
import Landing from "pages/Landing";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Auth from 'navigation/Auth';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from 'navigation/Admin';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/admin' component={Admin}/>
                <Route path='/auth' component={Auth}/>
                <Route path='/' exact component={Landing}/>
                {/* add redirect for first page */}
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
