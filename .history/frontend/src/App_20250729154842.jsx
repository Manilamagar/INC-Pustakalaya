import React from 'react';

import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetExample from './setup';



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={</>}  />
      <Route path='/setup' element={<SetExample/>} />
   
    </Routes>
    </BrowserRouter>
      )
}

export default App;
