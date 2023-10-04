import '../styles/dashboard.css';
import { NavLink } from 'react-router-dom';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';


export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <div className='wrapper'>
                {/*Navbar*/}
                <nav className='header-container'>
                    <div className='logo_name_container'>
                        <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                        <div className='title'>Sports Fanatic</div>
                    </div>
                    <div className='nav-container'>
                        <p><NavLink className='homepage-links-hover-state' to='/dashboard' style={{ color: customTheme.palette.secondary.main }}>Dashboard</NavLink></p>
                        <p><NavLink className='homepage-links-hover-state' to='/forums' style={{ color: customTheme.palette.secondary.main }}>Forums</NavLink></p>
                        <p><NavLink className='homepage-links-hover-state' to='/live-scores' style={{ color: customTheme.palette.secondary.main }}>Live Scores</NavLink></p>
                        <p><NavLink className='homepage-links-hover-state' to='/login'>Login</NavLink></p>
                    </div>
                </nav>

                {/*Content*/}


                {/*Footer*/}
                            <footer className='footer-container'>
                <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
                <div className='nav-container'>
                    <p className='homepage-links-hover-state'>About Us</p>
                    <p className='homepage-links-hover-state'>Contact Us</p>
                </div>
            </footer>
            </div>
        </ThemeProvider>
    );
}