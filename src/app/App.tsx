import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from '../account/login'
import ForgotPassword from '../account/ForgotPassword'


const App: FC = () => {
  return (
    <div className="App">
      <Login />
      <ForgotPassword />
    </div>
  );
}

export default App;
