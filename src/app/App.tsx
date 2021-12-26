import React, { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppRouter from './Router';
import AddLicenceModal from '../components/licences/addLicenceModal';


const App: FC = () => {
  return (
    <div className="App">
      <AddLicenceModal />
      <AppRouter />
    </div>
  );
}

export default App;
