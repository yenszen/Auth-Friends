import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  state = {
    navigate: false
  };

  onLogout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push />;
    }

    return (
      <button className="ui purple button" onClick={this.onLogout}>
        Log Out
      </button>
    );
  }
}

export default Logout;
