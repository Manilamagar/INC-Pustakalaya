import React from 'react';


import Navbar from './component/Navbar/navbar';

import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/Navbar' element={<Navabe/>} />
   
    </Routes>
    </BrowserRouter>
      )
}

export default App;
