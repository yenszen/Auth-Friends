import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  onInputChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  onLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log("Login.js: onLogin: sucess", res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form className="ui small form" onSubmit={this.onLogin}>
          <div className="fields">
            <div className="six wide field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.onInputChange}
              />
            </div>
            <div className="six wide field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <button className="ui button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
