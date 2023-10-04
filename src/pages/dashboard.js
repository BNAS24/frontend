import '../styles/dashboard.css';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';

export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box className='wrapper' sx={{ display: 'flex', flexDirection: 'column', position: '100vh', border: 'dashed 1px yellow' }}>
                <NavBar />
                {/*Content goes below this line*/}

                <Footer />
            </Box>
        </ThemeProvider>
    );
}