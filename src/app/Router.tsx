import React, { FC } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from '../account/login';
import Register from '../account/register';
import ForgotPassword from '../account/ForgotPassword';
import ResetPassword from '../account/ressetPassword';
import Profile from '../account/profile';
import Licences from '../components/licences/Licences';

const AppRouter: FC = () => (
  <div className="content">
    <Routes>
      <Route path="/" element={<Login title='login'/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:userId" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/licences" element={<Licences />} />
    </Routes>
  </div>
);

export default AppRouter;
