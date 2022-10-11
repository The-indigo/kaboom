import axios from 'axios';
import React from 'react';
// import { useState,useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';


function App() {
  // const [token, setToken] = useState("");

  // const logout = () => {
  //   setToken("")
  //   window.localStorage.removeItem("token")
  // }
  


  return (
    <div className="App">
<Home/>
    </div>
  );
}

export default App;
