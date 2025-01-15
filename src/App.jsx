// import { useState } from 'react'

import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./components/data/FriendList.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import transactions from './components/data/TransactionHistory.json'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
