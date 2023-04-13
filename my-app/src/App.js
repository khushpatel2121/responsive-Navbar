import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Router,Routes,Route} from "react-router-dom"; 
import Home from './components/Home';

function App() {
  return (
    <div className="App">
 
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
  
      
    </div>
  );
}

export default App;
