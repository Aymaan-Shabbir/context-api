import React from "react";

import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <div className=" w-full h-full p-10 flex flex-col m-auto items-center my-20 bg-slate-600 ">
      <UserContextProvider>
        <h1>React User Context</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
