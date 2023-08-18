import LoginForm from "./LoginForm";
import useToken from "./useToken";
import { Link } from "react-router-dom";
function LoginPage(){
    const {token, setToken } = useToken();
    
    if(!token) {
      return( 
      <div>
        <LoginForm setToken={setToken}/>
      </div>
      )
    }
  
}

export default LoginPage