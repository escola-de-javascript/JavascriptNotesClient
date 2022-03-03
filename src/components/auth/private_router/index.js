import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const privateRoute = ({ children }) => (
localStorage.getItem('user') ? children : <Navigate replace to="/login" />
)

export default privateRoute;
