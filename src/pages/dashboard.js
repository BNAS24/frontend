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
                        padding: '24px 40px',
                        border: 'dashed 1px lime',
                        flexGrow: '1',
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '1 / 1 / 2 / 2' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', height: '100%', color: 'white', alignItems: 'center', border: 'dashed 1px yellow' }}>
                            <Avatar variant='square' alt='profile picture' src='https://i.postimg.cc/qq6K81pw/Profile-Picture-Placeholder.png' sx={{ height: '104px', width: '104px' }} />
                            <Typography style={{ marginLeft: '8px' }} variant='h3'>Hello Brandon! {/*The name will be dynamicall rendered*/}</Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: 'dashed 1px red', gridArea: '2 / 1 / 3 / 2', padding: '8px' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',paddingLeft: '0 !important', paddingRight: '0 !important', gap: '24px', height: '100%', color: 'white', border: 'dashed 1px lime' }}>
                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0 !important', paddingRight: '0 !important', height: '100%', width: '100%', border: 'dashed 1px red' }}><Typography noWrap variant='h5'>Favorite Teams</Typography>
                            <Container sx={{height: '100%', width: '100%', marginTop: '24px', border: 'solid 1px white'}}></Container>
                            </Container>
                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0 !important', paddingRight: '0 !important', height: '100%', width: '100%', border: 'dashed 1px red' }}><Typography noWrap variant='h5'>Notifications</Typography>
                            <Container sx={{height: '100%', width: '100%', marginTop: '24px',border: 'solid 1px white'}}></Container>
                            </Container>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ background: 'linear-gradient(to bottom, #0081D4, #ffffff)', border: 'solid 1px green', gridArea: '1 / 2 / 3 / 3' }}>
                        
                    </Grid>
                </Grid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}