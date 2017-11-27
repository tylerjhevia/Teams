import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <header className="navigation">
        <NavLink to="/home" className="home-link">
          Home
        </NavLink>
        <NavLink to="/" className="welcome-link">
          Welcome
        </NavLink>
        <NavLink to="/register" className="register-link">
          Register
        </NavLink>
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
      </header>
    </div>
  );
};

export default Navigation;
