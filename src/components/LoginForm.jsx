import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      <h1> Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
