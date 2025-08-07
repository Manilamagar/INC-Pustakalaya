import React from 'react';


import Navbar from './component/Navbar/navbar';

import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Rout path='/' element={<Home/>}  />
      <Route path='/Navbar' element={<Navbar/>} />
   
    </Routes>
    </BrowserRouter>
      )
}

export default App;
