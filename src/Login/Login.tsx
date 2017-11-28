import * as React from 'react';
import LoginContainer from '../containers/LoginContainer';

export interface LoginState {
  username: String;
  password: String;
}

class Login extends React.Component<any, LoginState> {
  constructor() {
    super({});
    this.state = {
      username: '',
      password: ''
    };
    this.retrieveUser = this.retrieveUser.bind(this);
  }

  retrieveUser(e: any) {
    e.preventDefault();
    const { username } = this.state;
    console.log(username);
    fetch(`http://localhost:3001/api/v1/users/${username}`)
      .then(response => response.json())
      .then(response => this.props.storeCurrentUser(response))
      .catch(error => console.log(error));
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
          <button
            className="login-button"
            onClick={(e: any) => this.retrieveUser(e)}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer(Login);
