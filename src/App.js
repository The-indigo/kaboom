import axios from 'axios';
import React from 'react';
// import { useState,useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';

// const CLIENT_ID = "78ca31c0263547ea81735ce5867da30b"
// const CLIENT_SECRET="8d2a46522ba744afb64de27b62ccabb3"
// const REDIRECT_URI = "http://localhost:3000"
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
// const RESPONSE_TYPE = "token"


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
