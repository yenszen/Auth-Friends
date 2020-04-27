import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("FriendsList.js: getFriends: success", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Friends Characters</h2>
        {this.state.friends.map(char => {
          return (
            <React.Fragment>
              <h4>{char.name}</h4>
              <p>Age: {char.age}</p>
              <p>Email: {char.email}</p>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
