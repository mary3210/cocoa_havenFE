import React, { useEffect, useState } from "react";
import Home from "./components/Nav/home/home";
import Navbar from "./components/Nav/Navbar";
import DarkChocolates from "./components/DarkChocolates/DarkChocolates";
import MilkChocolateList from "./components/Nav/MilkChocolates/MilkChocolates";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import useToken from "./components/useToken";
import "./App.css";
import Logout from "./components/Logout";
import BestSeller from "./components/BestSeller/BestSeller";
import ShowChocolate from "./components/chocolateDetails/ChocolateDetails";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartForm from "./components/ShoppingCartForm"

function App() {
  const [loginFlag, setLoginFlag] = useState(false);
  const { token, setToken, removeToken } = useToken();
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
      window.history.pushState("", "", "http://lvh.me:3000/");
      //returns the window to the base url without revealing userinfo in the url bar
    }
  }, [token]);

  return (
    <div className="App">
      <div className="Header1">
        <Navbar />
        <div id="Header">
          <h1>Cocoa Haven</h1>
        </div>
        <div>
        <ShoppingCart/>
        </div>
        <div className="login-wrapper">
          {!token ? (
            <LoginForm setToken={setToken} />
          ) : (
            <Logout removeToken={removeToken} />
          )}
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home/:id" element={<ShowChocolate />} />
        <Route exact path="/bestsellers/:id" element={<BestSeller />} />
        <Route exact path="/milkchocolates" element={<MilkChocolateList />} />
        <Route exact path="/milkchocolates/:id" element={<ShowChocolate />} />
        <Route exact path="/darkchocolates" element={<DarkChocolates />} />
        <Route exact path="/darkchocolates/:id" element={<ShowChocolate />} />
        <Route exact path="/usercart" element={<ShoppingCartForm/>} />
        
        <Route
          exact
          path="/login"
          element={<LoginForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
