import '../styles/dashboard.css';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box, Container } from '@mui/system';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';
import { Avatar, Grid, Typography } from '@mui/material';

const fakeNotifications = ['John Doe', 'Chief Keef', 'Pex Ranger', 'John Doe', 'Chief Keef', 'Pex Ranger', 'John Doe', 'Chief Keef', 'Pex Ranger', 'John Doe', 'Chief Keef', 'Pex Ranger']

export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', border: 'dashed 1px yellow' }}>
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
                        padding: '24px 24px',
                        flexGrow: '1',
                    }}
                >
                    {/*1st Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ gridArea: '1 / 1 / 2 / 2' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center', paddingLeft: '0 !important', color: 'white' }}>
                            <Avatar variant='square' alt='profile picture' src='https://i.postimg.cc/qq6K81pw/Profile-Picture-Placeholder.png' sx={{ height: '104px', width: '104px' }} />
                            <Typography style={{ marginLeft: '24px' }} variant='h3'>Hello Brandon! {/*The name will be dynamicall rendered*/}</Typography>
                        </Container>
                    </Grid>
                    {/*2nd Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ gridArea: '2 / 1 / 3 / 2', overflow: 'hidden' }}>
                        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: '0 !important', paddingRight: '0 !important', gap: '24px', height: '100%', color: 'white' }}>
                            {/*First Box*/}
                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0 !important', paddingRight: '0 !important', height: '100%', width: '100%' }}>
                                <Typography noWrap variant='h5'>Favorite Teams</Typography>

                                <Container sx={{ height: '100%', width: '100%', marginTop: '24px', border: 'solid 1px white' }}>

                                </Container>
                            </Container>
                            {/*Second Box*/}
                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0 !important', paddingRight: '0 !important', height: '100%', width: '100%' }}>
                                <Typography noWrap variant='h5'>Notifications</Typography>

                                <Container sx={{ display: 'flex', flexGrow: '0', flexDirection: 'column', alignItems: 'center', height: '100%', maxHeight: '100%', overflow: 'hidden', width: '100%', marginTop: '24px', border: 'solid 1px white' }}>
                                    {fakeNotifications.map((notification, index) =>
                                        <Typography
                                            variant='body1'
                                            noWrap
                                            className='links-hover-state'
                                            key={index}
                                            sx={{ marginTop: '24px' }}
                                        >{notification} liked your post</Typography>)}
                                </Container>
                            </Container>
                        </Container>
                    </Grid>
                    {/*3rd Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ background: 'linear-gradient(to bottom, #0081D4, #ffffff)', border: 'solid 1px green', gridArea: '1 / 2 / 3 / 3' }}>

                    </Grid>
                </Grid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}