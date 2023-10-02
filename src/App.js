import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Login } from './pages/login';
import { Register } from './pages/register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
