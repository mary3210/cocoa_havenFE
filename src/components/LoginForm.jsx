import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function LoginForm({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        navigate('/')
    }
  return (
    <div className="login-wrapper">
      <h1> Please Log In</h1>
   
      <div>
      <Link to="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&redirect_uri=http://lvh.me:3000&client_id=656997079066-lsjl3j0f460hu0dp5trvv1alcmiqsscp.apps.googleusercontent.com">Login with google</Link>
      </div>
    </div>
  );
}

LoginForm.propTypes = { setToken: PropTypes.func.isRequired } 