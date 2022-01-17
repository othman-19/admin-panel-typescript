import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MoodmeLogo from './MoodmeLogo';

const Navbar: FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <Link className="navbar-brand" to="#">
      <MoodmeLogo />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link" to="/licenses">licenses</Link>
        <Link className="nav-item nav-link" to="#">Pricing</Link>
        <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
      </div>
    </div>
  </nav>
  );

export default Navbar;
