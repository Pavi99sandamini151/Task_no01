import React from 'react';
import Login from "./components/login";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from "./components/home";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/home' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
