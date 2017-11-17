import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>TEAMS</h1>
      <NavLink to="/home" className="start-button">
        Build a team
      </NavLink>
    </div>
  );
};

export default Welcome;
