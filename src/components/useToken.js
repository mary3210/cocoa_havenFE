import { useState } from 'react';
import {useLocation} from "react-router-dom"

// export function getToken () {
//     const tokenString = localStorage.getItem('token');
//     const userToken = (tokenString);
//     return userToken
// };
// export function useSaveToken () {
//     const [token, setToken ] = useState(getToken());
//     const token_id = URLSearchParams(window.location.hash).get('#access_token')
//     localStorage.setItem('token', token_id);
//     setToken(token_id);
// };
export default function useToken(){
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = tokenString;
        return userToken
    };
    const [token, setToken ] = useState(getToken());

    const saveToken = (token_id) => {
        localStorage.setItem('token', token_id);
        setToken(token_id);
    };
     
    return {
        setToken:saveToken,
        token
    }
}


