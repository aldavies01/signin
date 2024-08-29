import React from "react";
import { useState } from "react";
import usersData from "../data.js";
import UserSignedIn from "../components/userSignedIn.js";
import "../styles/homescreen.css";

const HomeScreen = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <>
      <div className="users-container">
        <h1>Users Signed In</h1>
        {users.map((user) => (
          <UserSignedIn key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
