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
    // console.log(this.state.credentials);
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log("Login.js: onLogin: sucess", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        className="ui center aligned container segment"
        style={{ width: "50vw" }}
      >
        <form className="ui form" onSubmit={this.onLogin}>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.onInputChange}
            />
          </div>
          <button className="ui purple button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
