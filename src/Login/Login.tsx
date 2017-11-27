import * as React from 'react';

export interface LoginState {
  username: String;
  password: String;
}

export default class Login extends React.Component<any, LoginState> {
  constructor() {
    super({});
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="login-container">
        <h1>Log in to your account</h1>
        <form className="login-form">
          <input
            className="login-username"
            placeholder="Enter username"
            onChange={(e: any) => this.setState({ username: e.target.value })}
          />
          <input
            className="login-password"
            placeholder="Enter password"
            onChange={(e: any) => this.setState({ password: e.target.value })}
            type="password"
          />
          <button className="login-button">Log in</button>
        </form>
      </div>
    );
  }
}
