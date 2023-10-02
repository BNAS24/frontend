import React from 'react';
import '../styles/homepage.css'
import Button from '@mui/material/Button';

export const Homepage = () => {
    return (
        <div className='wrapper'>
            <nav className='header-container'>
                <div className='logo_name_container'>
                    <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                    <div className='title'>Sports Fanatic</div>
                </div>
                <div className='nav-container'>
                    <p className='homepage-links-hover-state'>Forums</p>
                    <p className='homepage-links-hover-state'>Live Scores</p>
                    <p className='homepage-links-hover-state'>Login</p>
                </div>
            </nav>
            <section className='hero-container'>
                <p className='hero-text-overlay'>Join The Club</p>
                <Button style={{position: 'absolute', marginTop: '112px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--theme-orange)', color: 'white', height: '94px', width:'243px', borderRadius: '32px', boxShadow: '0px 4px 4px 0px #00000040',
 fontSize: '32px', whiteSpace: 'nowrap', zIndex: '2'}}>Get Started</Button>
            </section>
            <footer className='footer-container'>
            <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
                <div className='nav-container'>
                    <p className='homepage-links-hover-state'>About Us</p>
                    <p className='homepage-links-hover-state'>Contact Us</p>
                </div>
            </footer>
        </div>
    );
}
