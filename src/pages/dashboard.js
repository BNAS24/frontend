import '../styles/dashboard.css';
import { Link, NavLink } from 'react-router-dom';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';


export const Dashboard = () => {
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <div className='wrapper'>
                    <nav className='header-container'>
                        <div className='logo_name_container'>
                            <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                            <div className='title'>Sports Fanatic</div>
                        </div>
                        <div className='nav-container'>
                            <p><NavLink className='homepage-links-hover-state' to='/dashboard' style={{ color: customTheme.palette.secondary.main }}>Dashboard</NavLink></p>

                            <p><Link className='homepage-links-hover-state'>Forums</Link></p>
                            <p><Link className='homepage-links-hover-state'>Live Scores</Link></p>
                            <p><Link className='homepage-links-hover-state' to='/login'>Login</Link></p>
                        </div>
                    </nav>
                </div>
            </ThemeProvider>
        </>
    );
}