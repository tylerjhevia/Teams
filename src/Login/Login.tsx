import * as React from 'react';
import LoginContainer from './LoginContainer';
import './Login.css';

export interface LoginState {
  username: string;
  password: string;
  disabled: true | false;
  error: string;
}

export interface LoginProps {
  storeCurrentUser: Function;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disabled: true,
      error: ''
    };
    this.retrieveUser = this.retrieveUser.bind(this);
  }

  retrieveUser(e: any): void {
    e.preventDefault();
    const { username, password } = this.state;

    fetch(`http://localhost:3001/api/v1/users/${username}/${password}`)
      .then(response => response.json())
      .then((response: any) => {
        if (response.error) {
          this.setState({
            error: 'Username or password is invalid'
          });
        } else {
          this.props.storeCurrentUser(response);
          localStorage.setItem('current user', JSON.stringify(response));
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="login-container">
        <h1>Log in to your account</h1>
        <p className="error-message">
          {this.state.error}
        </p>
        <form className="login-form">
          <input
            className="login-username"
            placeholder="Enter username"
            onChange={(e: any) => {
              this.setState({ username: e.target.value });
              if (e.target.value === '' || this.state.password === '') {
                this.setState({ disabled: true });
              } else {
                this.setState({ disabled: false });
              }
            }}
          />
          <input
            className="login-password"
            placeholder="Enter password"
            onChange={(e: any) => {
              this.setState({ password: e.target.value });
              if (e.target.value === '' || this.state.username === '') {
                this.setState({ disabled: true });
              } else {
                this.setState({ disabled: false });
              }
            }}
            type="password"
          />
          <button
            className="login-button"
            disabled={this.state.disabled}
            onClick={(e: any) => {
              this.retrieveUser(e);
            }}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer(Login);
