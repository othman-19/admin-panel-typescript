import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from '../components/ login.component'

const App: FC = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
