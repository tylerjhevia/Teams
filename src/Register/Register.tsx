import * as React from 'react';

export interface RegisterState {
  username: String;
  password: String;
}

export default class Register extends React.Component<any, RegisterState> {
  constructor() {
    super({});
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="register-container">
        <h1>Create an account</h1>
        <form
          className="register-form"
          method="post"
          action="http://localhost:3001/api/v1/users"
        >
          <input
            className="register-username"
            placeholder="Enter username"
            onChange={(e: any) => this.setState({ username: e.target.value })}
          />
          <input
            className="register-password"
            placeholder="Enter password"
            onChange={(e: any) => this.setState({ username: e.target.value })}
          />
          <button className="register-button">Create account</button>
        </form>
      </div>
    );
  }
}
