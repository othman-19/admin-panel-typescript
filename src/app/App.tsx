import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppRouter from './Router';
import AddLicenseModal from '../components/licenses/addLicenseModal';

const App: FC = () => {
  return (
    <div className="App">
      <AddLicenseModal />
      <AppRouter />
    </div>
  );
}

export default App;
