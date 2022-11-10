import React from 'react';
import './App.css';
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Login/>
        <Home/>
    </div>
  );
}

export default App;
