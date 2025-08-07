import React from 'react';

import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetExample from './setup';



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<connect/>}/>
      
   
    </Routes>
    </BrowserRouter>
      )
}

export default App;
