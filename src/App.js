import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import Profile from './components/auth/Profile';
import Profiles from './components/layout/Profiles';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({signIn, user}) {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path='/Landing' element={ <Landing /> } />

    <Route exact path='/Register' element={ <Register /> } />
    <Route exact path='/Profile' element={ <Profile /> } />
    <Route exact path='/Profiles' element={ <Profiles /> } />
    <Route exact path='/Login' element={ <Login /> } />
    </Routes>
  </Router>
  );
}

export default (App);
