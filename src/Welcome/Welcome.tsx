import * as React from 'react';
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
        <p
          className="login-link"
          onClick={() => this.setState({ login: true })}
        >
          I have an account
        </p>
        <p className="register-link">I do not have an account</p>
      </div>
    );
  }
}
