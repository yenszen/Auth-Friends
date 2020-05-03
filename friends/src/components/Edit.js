import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Edit = ({
  setFriends,
  editing,
  setEditing,
  friendToEdit,
  setFriendToEdit,
  initialFriend
}) => {
  const onInputChange = e => {
    setFriendToEdit({
      ...friendToEdit,
      [e.target.name]: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/friends/${friendToEdit.id}`, friendToEdit)
      .then(res => {
        console.log(res);
        setFriends(res.data);
        setFriendToEdit(initialFriend);
        setEditing(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {editing && (
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            name="name"
            value={friendToEdit.name}
            onChange={onInputChange}
          />
          <input
            type="number"
            name="age"
            value={friendToEdit.age}
            onChange={onInputChange}
          />
          <input
            type="email"
            name="email"
            value={friendToEdit.email}
            onChange={onInputChange}
          />
          <button type="submit">Edit Friend</button>
        </form>
      )}
    </div>
  );
};

export default Edit;
