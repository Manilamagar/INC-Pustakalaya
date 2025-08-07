import React from 'react';


import Navbar from './component/Navbar/navbar';

import Home from './Homeome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './singup';



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/Navbar' element={<Navbar/>} />
   
    </Routes>
    </BrowserRouter>
      )
}

export default App;
