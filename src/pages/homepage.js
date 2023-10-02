import React from 'react';
import '../styles/homepage.css'
import Button from '@mui/material/Button';

export const Homepage = () => {
    return (
        <div className='wrapper'>
            <nav className='header-container'>
                <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                <div className='logo_name_container'>
                    <div className='title'>Sports Fanatic</div>
                </div>
                <div className='nav-container'>
                    <p className='homepage-links-hover-state'>Forums</p>
                    <p className='homepage-links-hover-state'>Live Scores</p>
                    <p className='homepage-links-hover-state'>Login</p>
                </div> 
            </nav>
            <section className='hero-container'>
                <img src='' alt='hero' />
                <p></p>
                <Button />
            </section>
            <footer className='footer-container'>

            </footer>
        </div>
    );
}
