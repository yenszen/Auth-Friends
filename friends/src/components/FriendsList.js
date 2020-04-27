import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { v4 as uuidv4 } from "uuid";

class FriendsList extends React.Component {
  state = {
    friends: [],
    newFriend: {
      id: null,
      name: "",
      age: 0,
      email: ""
    }
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

  onInputChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        id: uuidv4(),
        [e.target.name]: e.target.value
      }
    });
  };

  onAddFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.newFriend)
      .then(res => {
        console.log("FriendsList.js: onAddFriend: success", res);
        this.setState({
          friends: [...this.state.friends, res.data[res.data.length - 1]]
        });
      })
      .catch(err => console.log(err));
    // console.log("FriendsList.js: onAddFriend: success", this.state.newFriend);
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        name: "",
        age: 0,
        email: "",
        id: null
      }
    });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onAddFriend}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.newFriend.name}
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={this.state.newFriend.age}
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.newFriend.email}
              onChange={this.onInputChange}
            />
          </div>
          <button className="ui purple button" type="submit">
            Add Friend
          </button>
        </form>
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
