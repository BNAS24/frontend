import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { LoginRegister } from './pages/login_register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Login_Register' element={<LoginRegister />} />
    </Routes>
  );
}

export default App;
