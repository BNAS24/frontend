import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/auth/authSlice';
import { SidebarProvider } from './context/mobilenav';
import { AboutUs } from './pages/about_us/aboutUsContainer';
import { ContactUs } from './pages/contact_us/contactUsContainer';
import { Dashboard } from './pages/dashboard/dashboardContainer';
import { Forums } from './pages/forum/forumsContainer';
import { Homepage } from './pages/homepage/homepage';
import { LiveScores } from './pages/live_scores/liveScoresContainer';
import { Login } from './pages/login/loginContainer';
import { Profile } from './pages/profile/profileContainer';
import { Register } from './pages/register/registerContainer';
import { SubForumPage } from './pages/forum/subcomponents/forumsSubRoute.js/forumsSubPageContainer';

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
          <Route path='/forums'>
            <Route index element={<Forums />} />
            <Route path=':id' element={<SubForumPage />} />
          </Route>
          <Route path='/live-scores' element={<LiveScores />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;