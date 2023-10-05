import '../styles/dashboard.css';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box, Container } from '@mui/system';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';
import { Avatar, Grid, Typography } from '@mui/material';

const fakeNotifications = ['John Doe', 'Chief Keef', 'Pex Ranger', 'Sally', 'Jeff100', 'xrel12', '1234Hey', 'iloveFootball', 'Eaglesrule', 'SuperCoder123', 'TechExplorer24', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123']

export const Dashboard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                }}>
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
                        flex: '1',
                        maxHeight: '100vh',
                    }}
                >
                    {/*1st Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12}
                        sx={{
                            gridArea: '1 / 1 / 2 / 2',
                            overflow: 'hidden'
                        }}>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                height: '100%',
                                alignItems: 'center',
                                paddingLeft: '0 !important',
                                color: 'white'
                            }}>
                            <Avatar
                                variant='square'
                                alt='profile picture'
                                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                                sx={{
                                    height: '104px',
                                    width: '104px'
                                }} />
                            <Typography
                                variant='h3'
                                style={{
                                    marginLeft: '24px'
                                }}

                            >
                                Hello Brandon!
                                {/*The name will be dynamicall rendered*/}
                            </Typography>
                        </Container>
                    </Grid>
                    {/*2nd Grid Item*/}

                    <Grid item xs={12} sm={12} md={12} lg={12}
                        sx={{
                            gridArea: '2 / 1 / 3 / 2',
                            overflow: 'hidden'
                        }}>

                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                paddingLeft: '0 !important',
                                paddingRight: '0 !important',
                                gap: '24px',
                                height: '100%',
                                color: 'white'
                            }}>

                            {/*First Box*/}

                            <Container
                                sx={{
                                    display: 'flex',
                                    flex: '1',
                                    flexShrink: '0',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    maxHeight: '100%',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important'
                                }}>

                                <Typography
                                    noWrap
                                    variant='h4'>
                                    Favorite Teams
                                </Typography>

                                <Container
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        marginTop: '24px',
                                        border: 'solid 1px #F26101'
                                    }}>

                                </Container>
                            </Container>

                            {/*Second Box*/}

                            <Container
                                sx={{
                                    display: 'flex',
                                    flex: '1', flexShrink: '0',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    maxHeight: '100%',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important'
                                }}>

                                <Typography
                                    noWrap
                                    variant='h4'>
                                    Notifications
                                </Typography>

                                <Container
                                    sx={{
                                        display: 'flex !important',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        height: '100%',
                                        width: '100%',
                                        marginTop: '24px',
                                        paddingBottom: '24px',
                                        overflowY: 'scroll',
                                        border: 'solid 1px #F26101'
                                    }}
                                    style={{
                                        /* WebKit-based browsers (Chrome and Safari) scrollbar styles */
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#F26101 #ffffff',
                                    }}
                                >
                                    {/*The Typography element will actually get changed into a NavLink component for demonstration purposes of clicking on a notification and it takes you to someone's profile page, you have to build a mock profile page first*/}

                                    {fakeNotifications.map((notification, index) =>
                                        <Typography
                                            variant='body1'
                                            noWrap
                                            className='links-hover-state'
                                            key={index}
                                            sx={{ marginTop: '24px', flexShrink: '0' }}
                                        >
                                            {notification} liked your post
                                        </Typography>)}
                                </Container>
                            </Container>
                        </Container>

                    </Grid>
                    {/*3rd Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12}
                        sx={{
                            background: 'linear-gradient(to bottom, #0081D4, #ffffff)',
                            border: 'solid 1px green',
                            gridArea: '1 / 2 / 3 / 3',
                            overflow: 'hidden'
                        }}>
                    </Grid>
                </Grid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}