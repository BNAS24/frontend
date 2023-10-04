import '../styles/dashboard.css';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box, Container } from '@mui/system';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';
import { Avatar, Grid, Typography } from '@mui/material';

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
                        columnGap: '56px',
                        padding: '24px 0',
                        border: 'dashed 1px lime',
                        flexGrow: '1',
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '1 / 1 / 2 / 2' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', height: '100%', color: 'white', alignItems: 'center', border: 'dashed 1px yellow' }}>
                            <Avatar variant='square' alt='profile picture' src='https://i.postimg.cc/qq6K81pw/Profile-Picture-Placeholder.png' sx={{ height: '104px', width: '104px' }} />
                            <Typography style={{ marginLeft: '8px' }} variant='h5'>Hello Brandon! {/*The name will be dynamicall rendered*/}</Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '2 / 1 / 3 / 2', padding: '8px' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '40px', height: '100%', color: 'white', border: 'dashed 1px lime' }}>
                            <Container sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '50%', border: 'dashed 1px red' }}><Typography>Favorite Teams</Typography></Container>
                            <Container sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '50%', border: 'dashed 1px red' }}><Typography>Notifications</Typography></Container>
                        </Container>
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