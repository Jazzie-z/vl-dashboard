import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from 'components/pages/Login'

export const Auth = () => {
    return (
        <Switch>
            <Route path={['/login', '/register']} component={Login}></Route>
            <Route path="/" render={()=><Redirect to="/login"/>}/>
        </Switch>
    )
}
