import React from "react";
import Usercard from "../components/Profile/Usercard";
import Weather from "../components/Profile/Weather";
import News from "../components/Profile/News";
const Profile = () => {
  return (
    <div>
      <Usercard />
      <Weather />
      <News />
    </div>
  );
};

export default Profile;
