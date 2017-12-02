import * as React from 'react';

export interface RegisterState {
  username: String;
  password: String;
  disabled: true | false;
}

export default class Register extends React.Component<any, RegisterState> {
  constructor() {
    super({});
    this.state = {
      username: '',
      password: '',
      disabled: true
    };
    this.createUser = this.createUser.bind(this);
  }

  createUser(e: any) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username: username, password: password };

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
            className="register-password"
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
            className="register-button"
            disabled={this.state.disabled}
            onClick={(e: any) => this.createUser(e)}
          >
            Create account
          </button>
        </form>
      </div>
    );
  }
}
