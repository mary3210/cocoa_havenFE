import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
export default function Logout({ removeToken }) {
  function handleChange() {
    removeToken();
  }
  return (
    <div>
      <button onClick={handleChange}>Logout</button>
    </div>
  );
}
