import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

import React from "react";

const UpdateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
