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
    this.createUser = this.createUser.bind(this);
  }

  createUser(e: any) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username: username, password: password };
    console.log(user);

    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(parsedResponse => console.log(parsedResponse))
      .catch(error => console.log({ error }));
  }

  render() {
    return (
      <div className="register-container">
        <h1>Create an account</h1>
        <form className="register-form">
          <input
            className="register-username"
            placeholder="Enter username"
            onChange={(e: any) => this.setState({ username: e.target.value })}
          />
          <input
            className="register-password"
            placeholder="Enter password"
            onChange={(e: any) => this.setState({ password: e.target.value })}
            type="password"
          />
          <button
            className="register-button"
            onClick={(e: any) => this.createUser(e)}
          >
            Create account
          </button>
        </form>
      </div>
    );
  }
}
