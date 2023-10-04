import '../styles/dashboard.css';
import { NavLink } from 'react-router-dom';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { NavBar } from '../components/authnav';


export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box className='wrapper' sx={{ display: 'flex', flexDirection: 'column', position: '100vh', border: 'dashed 1px yellow' }}>

                {/*Navbar*/}
                <NavBar />
                {/*Content goes below this line*/}


                {/*Footer*/}
                <footer className='footer-container'>
                    <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
                    <div className='nav-container'>
                        <p className='homepage-links-hover-state'>About Us</p>
                        <p className='homepage-links-hover-state'>Contact Us</p>
                    </div>
                </footer>

            </Box>
        </ThemeProvider>
    );
}