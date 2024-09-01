import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState(""); // State for user first name

  return (
    <div className="w-screen h-screen bg-[#000814] flex  flex-col ">
      <ToastContainer />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userFirstName={userFirstName} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn = {isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserFirstName={setUserFirstName} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserFirstName={setUserFirstName} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard userFirstName={userFirstName} />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
