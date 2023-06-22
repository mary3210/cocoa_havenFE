import Home from './components/Nav/home/home';
import Navbar from './components/Nav/Navbar';
import DarkChocolates from './components/DarkChocolates/DarkChocolates';
import MilkChocolates from './components/Nav/MilkChocolates/MilkChocolates';
import {Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
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
