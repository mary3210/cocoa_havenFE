import React, { useState } from 'react';
import Home from './components/Nav/home/home';
import Navbar from './components/Nav/Navbar';
import DarkChocolates from './components/DarkChocolates/DarkChocolates';
import MilkChocolates from './components/Nav/MilkChocolates/MilkChocolates';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
const [token, setToken ] = useState();

if(!token) {
  return <Login setToken={setToken}/>
}
  return (
    <div className="App">
      <Login/>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/milkchocolates" element={<MilkChocolates/>}/>
      <Route exact path="/darkchocolates" element={<DarkChocolates/>}/>
      
     </Routes>
     
    </div>
  );
}

export default App;
