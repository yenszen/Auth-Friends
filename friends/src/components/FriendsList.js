import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: "", age: 0, email: "" });

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("FriendsList: useEffect: GET", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const onInputChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log("FriendsList.js: onFormSubmit: success", res);
        setFriends([...friends, res.data[res.data.length - 1]]);
        setNewFriend({ name: "", age: 0, email: "" });
      })
      .catch(err => console.log(err));
  };

  const onDelete = id => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={onInputChange}
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={onInputChange}
        />
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={onInputChange}
        />
        <button type="submit">Add Friend</button>
      </form>

      {friends.map(friend => {
        return (
          <React.Fragment>
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <div>
              <button>Edit</button>
              <button onClick={() => onDelete(friend.id)}>Delete</button>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FriendsList;
