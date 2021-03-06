import * as React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Welcome.css';

interface WelcomeState {
  login: boolean;
  register: boolean;
}

export default class Welcome extends React.Component<{}, WelcomeState> {
  constructor() {
    super({});
    this.state = {
      login: false,
      register: false
    };
  }

  showPopup(): JSX.Element | null {
    if (this.state.login === true) {
      return <Login />;
    } else if (this.state.register === true) {
      return <Register />;
    } else {
      return null;
    }
  }

  showBackButton(): JSX.Element | null {
    if (this.state.login || this.state.register) {
      return (
        <button
          onClick={() => this.setState({ login: false, register: false })}
          className="back-button"
        >
          Go back
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="welcome-container">
        <h1>TEAMS</h1>

        <p
          className="login-link"
          onClick={(): void => this.setState({ login: true })}
        >
          I have an account
        </p>
        <p
          className="register-link"
          onClick={() => this.setState({ register: true })}
        >
          I do not have an account
        </p>
        {this.showPopup()}
        {this.showBackButton()}
      </div>
    );
  }
}
