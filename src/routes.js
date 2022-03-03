import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

import PrivateRouter from './components/auth/private_router';

const Routes2 = () => (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomeScreen />} />
<Route path='/register' element={<RegisterScreen />} />
<Route path='/login' element={<LoginScreen />}/>
<Route path='/notes' element={<PrivateRouter> <NotesIndexScreen /> </PrivateRouter>} />
<Route path='/users/edit' element={<PrivateRouter> <UserEditScreen /> </PrivateRouter>} />
</Routes>
</BrowserRouter>
)
export default Routes2;
