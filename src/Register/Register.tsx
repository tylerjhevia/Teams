import * as React from 'react';

export interface RegisterState {
  username: String;
  password: String;
}

export default class Register extends React.Component<RegisterState, any> {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="register-container">
        <form className="register-form" method="post" />
        <input className="register-username" placeholder="Enter username" />
        <input className="register-password" placeholder="Enter password" />
      </div>
    );
  }
}
