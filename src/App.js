import React, { useEffect, useState } from "react";
import Home from "./components/Nav/home/home";
import Navbar from "./components/Nav/Navbar";
import DarkChocolates from "./components/DarkChocolates/DarkChocolates";
import MilkChocolates from "./components/Nav/MilkChocolates/MilkChocolates";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import useToken from "./components/useToken";
import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  const { token, setToken } = useToken();
  const access_token_url = new URLSearchParams(window.location.hash).get(
    "#access_token"
  );

  useEffect(() => {
    if (access_token_url) {
      //get token from url and save it
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://www.googleapis.com/oauth2/v3/userinfo");
      xhr.setRequestHeader("Authorization", "Bearer " + access_token_url);
      xhr.onload = function () {
        var res = JSON.parse(xhr.responseText);
        if (res.sub) {
          setToken(res.sub);
          return fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token_id: res.sub }),
          });
        }
      };
      xhr.send();
      window.history.pushState('', '', 'http://lvh.me:3000/')
      //returns the window to the base url without revealing userinfo in the url bar
    }
  }, [token]);



 
  return (
    <div className="App">
      {!token && <Login/>}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/milkchocolates" element={<MilkChocolates />} />
        <Route exact path="/darkchocolates" element={<DarkChocolates />} />
        <Route exact path="/login" element={<LoginForm setToken={setToken}/>}/>
      </Routes>
    </div>
  );
}

export default App;
