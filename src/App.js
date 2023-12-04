import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Forums } from './pages/forum/forums';
import { LiveScores } from './pages/live_scores/livescores';
import { AboutUs } from './pages/about_us/aboutus';
import { ContactUS } from './pages/contact_us/contactus';
import './App.css';
import { SidebarProvider } from './context/mobilenav';
import { AuthProvider } from './context/auth/authSlice';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forums' element={<Forums />} />
          <Route path='/live-scores' element={<LiveScores />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUS />} />
        </Routes>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;