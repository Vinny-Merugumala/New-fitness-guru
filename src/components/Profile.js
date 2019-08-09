import React from "react";
import { useAuth0 } from "../components/react-auth0-wrapper";
import "../app.css";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }

  return (
    <>
      <div className="profile-page" id="profile">
        <img class="" src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      </div>
    </>
  );
};

export default Profile;
