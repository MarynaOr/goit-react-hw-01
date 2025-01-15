// import { useState } from 'react'

import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./components/data/FriendList.json";

import FriendList from "./components/FriendList/FriendList.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
};

export default App;
