import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppRouter from './Router';
import Navbar from '../components/UI/Navbar';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar/ >
      <AppRouter />
    </div>
  );
}

export default App;
