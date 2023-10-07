import '../styles/dashboard.css';
import { NavBar } from '../components/authnav';
import { Footer } from '../components/authfoot';
import { Avatar, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import customTheme from '../styles/context/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Box, Container } from '@mui/system';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CommentsModal } from '../components/commentmd';


const fakeTeams = ['Philadelphia Eagles', 'Phillies', ' 76ixers', 'Union', 'Flyers', 'Norristown Bandits', 'New York Yankees', 'Los Angeles Lakers', 'Dallas Cowboys', 'Boston Red Sox', 'Chicago Bulls', 'Green Bay Packers', 'Golden State Warriors', 'Pittsburgh Steelers', 'San Francisco Giants', 'New England Patriots']

const fakeNotifications = ['John Doe', 'Chief Keef', 'Pex Ranger', 'Sally', 'Jeff100', 'xrel12', '1234Hey', 'iloveFootball', 'Eaglesrule', 'SuperCoder123', 'TechExplorer24', 'StarGazer99', 'PexRanger16', 'AdventureSeeker77', 'MusicMaestro55', 'FitnessFanatic19', 'TravelEnthusiast7', 'FoodieDelight', 'GamingNinja21', 'MovieBuff123']

const postContent = {
    user1: {
        username: 'Username123',
        timeCreated: '1 hour ago',
        postText: 'Hey everybody! I love sports and I think the Philadelphia Eagles are the best team in the NFL!',
        forumLink: '/forums'
    },
    user2: {
        username: 'JupiterSkiees0',
        timeCreated: '1m ago',
        postText: 'New england needs to bring back Tom Brady!',
        forumLink: '/'
    },
    user3: {
        username: 'SoccerFanatic',
        timeCreated: '2h ago',
        postText: 'I think soccer is the best sport in the world!',
        forumLink: '/forums'
    },
    user4: {
        username: 'BasketballLover',
        timeCreated: '3h ago',
        postText: 'LeBron James is the greatest basketball player of all time!',
        forumLink: '/forums'
    },
    user5: {
        username: 'tinyFootball',
        timeCreated: '4h ago',
        postText: 'I cant wait for the next football season to start!',
        forumLink: '/forums'
    }
};



export const Dashboard = () => {

    // Initialize an object to store like button states for each post
    const [likeButton, setLikeButtons] = useState({});

    // Function to toggle the like button state for a specific post
    const toggleLike = (postKey) => {
        setLikeButtons((prevLikeButtons) => ({
            ...prevLikeButtons,
            [postKey]: !prevLikeButtons[postKey], // Toggle the state for the specified post
        }));
    };


    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true)
    };

    const handleCloseModal = () => {
        setModalOpen(false)
    };

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
                        gridTemplateRows: '1fr 5fr',
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
                        }}>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                height: '100%',
                                alignItems: 'start',
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
                            overflowY: 'hidden',
                        }}>

                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'stretch',
                                minWidth: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                paddingLeft: '0 !important',
                                paddingRight: '0 !important',
                                gap: '24px',
                                color: 'white'
                            }}>

                            {/*First Box*/}

                            <Container
                                sx={{
                                    display: 'flex',
                                    flexShrink: '1',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    maxHeight: '100%',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important'
                                }}>

                                <Typography
                                    noWrap={true}
                                    align='center'
                                    variant='h4'
                                    sx={{
                                        fontSize: {
                                            xs: '1.5rem',
                                            sm: '1.3rem',
                                            md: '1.7rem',
                                            lg: '2.5rem',
                                            xl: ''
                                        }
                                    }}>
                                    Favorite Teams
                                </Typography>

                                <Container
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        height: '100%',
                                        width: '100%',
                                        marginTop: '24px',
                                        paddingLeft: '0 !important',
                                        paddingRight: '0 !important',
                                        overflowY: 'auto',
                                        border: 'solid 1px #F26101'
                                    }}>
                                    {/*Add map*/}
                                    {fakeTeams.map((team) =>
                                        <Container
                                            key={team}
                                            sx={{
                                                display: 'flex',
                                                flexGrow: 0,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                width: '33%',
                                                marginTop: '24px',

                                            }}
                                        >
                                            <Avatar
                                                variant='square'
                                                alt='team logo'
                                                src='https://cdn-icons-png.flaticon.com/512/2553/2553695.png'
                                                sx={{
                                                    height: '62px',
                                                    width: '62px',
                                                }}
                                            >

                                            </Avatar>
                                            <Typography
                                                variant='body1'
                                                align='center'
                                                className='links-hover-state'

                                                sx={{
                                                    flexShrink: 2,
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                {team}
                                            </Typography>
                                        </Container>
                                    )}

                                </Container>
                            </Container>

                            {/*Second Box*/}

                            <Container
                                sx={{
                                    display: 'flex',
                                    flexShrink: '1',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    maxHeight: '100%',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important'
                                }}>

                                <Typography
                                    noWrap={true}
                                    align='center'
                                    variant='h4'
                                    sx={{
                                        fontSize: {
                                            xs: '1.5rem',
                                            sm: '1.3rem',
                                            md: '1.7rem',
                                            lg: '2.5rem',
                                            xl: ''
                                        }
                                    }}
                                >
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
                                        overflowY: 'auto',
                                        border: 'solid 1px #F26101'
                                    }}>

                                    {/*The Typography element will actually get changed into a NavLink component for demonstration purposes of clicking on a notification and it takes you to someone's profile page, you have to build a mock profile page first*/}

                                    {fakeNotifications.map((notification) =>
                                        <Typography
                                            key={notification}
                                            variant='body1'
                                            align='center'
                                            className='links-hover-state'
                                            sx={{
                                                marginTop: '24px', flexShrink: '0', fontSize: '1rem'
                                            }}>
                                            {notification} liked your post
                                        </Typography>
                                    )}
                                </Container>
                            </Container>
                        </Container>

                    </Grid>
                    {/*3rd Grid Item*/}
                    <Grid item xs={12} sm={12} md={12} lg={12}
                        sx={{
                            background: 'linear-gradient(to bottom, #0081D4, #ffffff)',
                            gridArea: '1 / 2 / 3 / 3',
                            width: '100%',
                            overflow: 'auto',
                        }}>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '100%',
                                paddingLeft: '0 !important',
                                paddingRight: '0 !important',
                            }}
                        >
                            <Container
                                className='dashboard-forum-navbar'
                                id='dashboard-forum-navbar'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexGrow: '0',
                                    flexShrink: '0',
                                    color: 'white',
                                }}
                            >
                                <Typography><strong>Forums you follow</strong></Typography>
                                <Link to='forums'>Explore</Link>
                            </Container>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    flexShrink: 0,
                                    gap: '16px',
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '32px',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important'
                                }}
                            >
                                {
                                    Object.keys(postContent).map((key) =>
                                        <Container
                                            key={key}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                gap: '16px',
                                                paddingLeft: '32px !important',
                                                paddingRight: '32px !important'
                                            }}
                                        >
                                            <Avatar
                                            key={key}
                                                alt='profile picture'
                                                variant='square'
                                                sx={{
                                                    height: '64px',
                                                    width: '64px',
                                                }}
                                            >
                                            </Avatar>
                                            <Container
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'start',
                                                    gap: '8px',
                                                    height: '168px',
                                                    padding: '8px',
                                                    backgroundColor: 'var(--theme-blue)',
                                                }}

                                            >
                                                <div
                                                    className='post-header'
                                                >
                                                    <Typography
                                                        align='center'
                                                        noWrap
                                                        sx={{
                                                            fontSize: {
                                                                xs: '0.5rem',
                                                                sm: '0.7rem',
                                                                md: '1rem',
                                                                lg: '1.2rem',
                                                                xl: ''
                                                            },
                                                            color: 'var(--theme-white)'
                                                        }}
                                                    >
                                                        {postContent[key].username}
                                                    </Typography>
                                                    <Typography
                                                        align='center'
                                                        noWrap
                                                        sx={{
                                                            fontSize: {
                                                                xs: '0.5rem',
                                                                sm: '0.7rem',
                                                                md: '1rem',
                                                                lg: '1.2rem',
                                                                xl: ''
                                                            },
                                                            color: 'var(--theme-white)'

                                                        }}

                                                    >
                                                        {postContent[key].timeCreated}
                                                    </Typography>
                                                </div>
                                                <Container
                                                    sx={{
                                                        height: '100px',
                                                        width: '100%',
                                                        padding: '8px 8px !important',
                                                        border: 'solid 1px var(--theme-orange)',
                                                        overflowY: 'auto',
                                                    }}
                                                >
                                                    <Typography
                                                        variant='body1'
                                                        sx={{
                                                            color: 'var(--theme-white)'
                                                        }}
                                                    >
                                                        {postContent[key].postText}
                                                    </Typography>
                                                </Container>
                                                <div
                                                    className='post-footer'
                                                >
                                                    <Link
                                                        sx={{
                                                            fontSize: {
                                                                xs: '0.5rem',
                                                                sm: '0.7rem',
                                                                md: '1rem',
                                                                lg: '1.2rem',
                                                                xl: ''
                                                            },
                                                            color: 'var(--theme-white)'
                                                        }}
                                                        to={postContent[key].forumLink}
                                                    >
                                                        <Typography
                                                            noWrap
                                                            align='center'
                                                            className='links-hover-state'
                                                            sx={{
                                                                fontSize: {
                                                                    xs: '0.5rem',
                                                                    sm: '0.7rem',
                                                                    md: '1rem',
                                                                    lg: '1.2rem',
                                                                    xl: ''
                                                                },
                                                                color: 'var(--theme-white)'
                                                            }}
                                                        >Forum Name</Typography>
                                                    </Link>
                                                    <div className='post-controls'>
                                                        <AddCommentOutlinedIcon
                                                            key={key}
                                                            sx={{
                                                                color: 'var(--theme-orange)',
                                                                '&:hover': {
                                                                    cursor: 'pointer',
                                                                    color: '#ff8c33',
                                                                }
                                                            }}
                                                            onClick={() => handleOpenModal(key)}
                                                        />
                                                        {likeButton[key] ? (
                                                            <FavoriteOutlinedIcon
                                                                onClick={() => toggleLike(key)}
                                                                sx={{
                                                                    color: 'red',
                                                                    '&:hover': {
                                                                        cursor: 'pointer',
                                                                        // color: '#ff8c33',
                                                                    }
                                                                }}
                                                            />) : (<FavoriteBorderOutlinedIcon
                                                                onClick={() => toggleLike(key)}
                                                                sx={{
                                                                    color: 'red',
                                                                    '&:hover': {
                                                                        cursor: 'pointer',
                                                                        color: '#f95149',
                                                                    }
                                                                }} />

                                                        )}
                                                        <CommentsModal
                                                            open={isModalOpen}
                                                            onClose={() => handleCloseModal()}
                                                            username={postContent[key].username}
                                                            comment={postContent[key].postText}
                                                        />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Container>
                                    )}
                            </Container>
                        </Container>
                    </Grid>
                </Grid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}