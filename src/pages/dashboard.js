import '../styles/dashboard.css';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';
import { Grid } from '@mui/material';

export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box className='wrapper' sx={{ display: 'flex', flexDirection: 'column', position: '100vh', border: 'dashed 1px yellow' }}>
                <NavBar />
                {/*Content goes below this line*/}
                <Grid
                    container
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gridTemplateRows: '1fr 3fr',
                        gridGap: '8px',
                        padding: '24px 0',
                        border: 'dashed 1px lime',
                        flexGrow: '1',
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '1 / 1 / 2 / 2' }}>
                        <img src='https://i.postimg.cc/qq6K81pw/Profile-Picture-Placeholder.png' alt='profile-ph'></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '2 / 1 / 3 / 2' }}>
                        <Box color='white'>2</Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '1 / 2 / 3 / 3' }}>
                        <Box color='white'>3</Box>
                    </Grid>
                </Grid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}