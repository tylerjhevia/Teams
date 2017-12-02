import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css';

interface WelcomeState {
  login: Boolean;
  register: Boolean;
}

export default class Welcome extends React.Component<{}, WelcomeState> {
  constructor() {
    super({});
    this.state = {
      login: false,
      register: false
    };
  }

  render() {
    return (
      <div className="welcome-container">
        <h1>TEAMS</h1>
        <NavLink to="/login" className="login-link">
          I have an account
        </NavLink>
        <NavLink to="/register" className="register-link">
          I do not have an account
        </NavLink>
      </div>
    );
  }
}
