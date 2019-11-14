import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login' }} />
  )}/>
)

export default privateRoute;