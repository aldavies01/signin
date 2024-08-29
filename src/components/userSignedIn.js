import React from "react";
import "../styles/userSignedIn.css";

const UserSignedIn = ({ user }) => {
  return (
    <div className="signed-in-container">
      <h2>{user.name}</h2>
      <div className="signed-in-time">
        <h2>Signed In:</h2>
        <h2 className="sign-in-date">{user.signInTime}</h2>
      </div>
    </div>
  );
};

export default UserSignedIn;
