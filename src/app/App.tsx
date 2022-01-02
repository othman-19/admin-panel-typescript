import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppRouter from './Router';

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
