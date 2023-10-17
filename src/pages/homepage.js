import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';


export const Homepage = () => {
    return (
        <div className='wrapper'>
            <nav className='header-container'>
                <div className='logo_name_container'>
                    <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                    <div className='title'>Sports Fanatic</div>
                </div>
                <div className='nav-container'>
                    <p className='links-hover-state'>Forums</p>
                    <p className='links-hover-state'>Live Scores</p>
                    <p><Link className='links-hover-state' to='/login'>Login</Link></p>
                </div>
            </nav>
            <section className='hero-container'>
                <p className='hero-text-overlay'>Join The Club</p>
                <Link to='/register'>
                <Button className='C2A-Button' style={{
                    position: 'absolute', marginTop: '112px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--theme-orange)', color: 'white', height: '88px', width: '243px', borderRadius: '24px', boxShadow: '0px 4px 4px 0px #00000040',
                    fontSize: '32px', fontWeight: '600', whiteSpace: 'nowrap', zIndex: '2'
                }}>Get Started</Button></Link>
            </section>
            <footer className='footer-container'>
                <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
                <div className='nav-container'>
                    <p className='links-hover-state'>About Us</p>
                    <p className='links-hover-state'>Contact Us</p>
                </div>
            </footer>
        </div>
    );
}
