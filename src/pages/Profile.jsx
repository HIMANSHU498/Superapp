import React from "react";
import Usercard from "../components/Profile/Usercard";
import Weather from "../components/Profile/Weather";
import News from "../components/Profile/News";
import Notes from "../components/Profile/Notes";
import Timer from "../components/Profile/Timer";
const Profile = () => {
  return (
    <div>
      <Usercard />
      <Weather />
      <Notes />
      <Timer />
      <News />
    </div>
  );
};

export default Profile;
