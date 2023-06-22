import Home from './components/Nav/home/home';
import Navbar from './components/Nav/Navbar';
import {Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
