import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/auth/authSlice';
import { SidebarProvider } from './context/mobilenav';
import { AboutUs } from './pages/about_us/aboutus';
import { ContactUS } from './pages/contact_us/contactus';
import { Dashboard } from './pages/dashboard/dashboardContainer';
import { Forums } from './pages/forum/forumsContainer';
import { Homepage } from './pages/homepage/homepage';
import { LiveScores } from './pages/live_scores/livescores';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { Register } from './pages/register/register';

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