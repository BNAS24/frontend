import { ThemeProvider } from '@emotion/react';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar, Container, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { CommentsModal } from '../../components/commentmd';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { useSidebar } from '../../context/mobilenav';
import { fakeNotifications, fakeTeams, postContent } from '../../datastore/dashboard';
import customTheme from '../../styles/context/customtheme';
import '../../styles/dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { MainLayoutGrid, DashboardHeadGrid, Greeting, GreetingXS, DashboardHeadXS, UserAvatar, DashboardContainer, FavoriteTeamsContainer, FavoriteTeamsContainerXS, UserData, UserDataContainer, ForumsYouFollow, FYFNavBar } from '../dashboard/components'

export const Dashboard = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    // Initialize an object to store like button states for each post
    const [likeButton, setLikeButtons] = useState({});

    const [isModalOpen, setModalOpen] = useState(null);

    const [isTeamsDisplayed, setTeamsDisplayed] = useState(false);

    const [isNotificationsDisplayed, setNotificationsDisplayed] = useState(false);

    const { isSidebarOpen } = useSidebar();

    // Function to toggle the like button state for a specific post
    const toggleLike = (postKey) => {
        setLikeButtons((prevLikeButtons) => ({
            ...prevLikeButtons,
            [postKey]: !prevLikeButtons[postKey], // Toggle the state for the specified post
        }));
    };

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const handleTeamsDisplayed = () => {
        setTeamsDisplayed(!isTeamsDisplayed)
    };

    const handleNotificaitions = () => {
        setNotificationsDisplayed(!isNotificationsDisplayed)
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    width: '100%'
                }}>
                <NavBar />

                {/*Content goes below this line*/}

                <MainLayoutGrid
                    container
                >

                    {/*1st Grid Item*/}

                    <DashboardHeadGrid
                        item
                        xs={12} sm={12} md={12} lg={12}>
                        <DashboardContainer
                            disableGutters={true}
                        >
                            <UserAvatar
                                variant='square'
                                alt='profile picture'
                                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            />
                            <Greeting>
                                Hello {user && user.username}!
                            </Greeting>
                        </DashboardContainer>
                    </DashboardHeadGrid>

                    {/*Displays only on xs sreens only*/}

                    <DashboardHeadXS
                        item
                        maxWidth="xs"
                    >
                        <GreetingXS>
                            Hello {user && user.username}!
                        </GreetingXS>
                    </DashboardHeadXS>

                    {/*2nd Grid Item*/}

                    <UserData
                        item
                        xs={12} sm={12} md={12} lg={12}
                    >
                        <UserDataContainer
                            disableGutters={true}
                        >

                            {/*First Container*/}

                            <FavoriteTeamsContainer
                                disableGutters={true}
                            >
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
                                    Favorite Teams
                                </Typography>

                                <Container
                                    disableGutters={true}
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        height: '100%',
                                        width: '100%',
                                        mt: '24px',
                                        overflowY: 'auto',
                                        border: 'solid 1px #F26101'
                                    }}>

                                    {fakeTeams.map((team) =>
                                        <Container
                                            key={team}
                                            sx={{
                                                display: 'flex',
                                                flexShrink: 1,
                                                flexGrow: 0,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                width: '33%',
                                                minWidth: '73px',
                                                mt: '24px',
                                                p: '0 0 !important'

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
                            </FavoriteTeamsContainer>

                            {/*Displays on extra small screens only*/}

                            <FavoriteTeamsContainerXS
                            >
                                <img
                                    className='side-controls'
                                    onClick={handleNotificaitions}
                                    src='https://i.postimg.cc/d0s4fX3v/Notifications.png'
                                    alt='notifications'
                                    style={{
                                        width: '40px',
                                        height: 'auto',
                                        marginTop: '8px',
                                    }}
                                >
                                </img>
                                <img
                                    className='side-controls'
                                    onClick={handleTeamsDisplayed}
                                    src='https://i.postimg.cc/0QvrZCrT/Favorite-Teams.png'
                                    alt='badges icon'
                                    style={{
                                        width: '48px',
                                        height: 'auto'
                                    }}
                                >
                                </img>
                            </FavoriteTeamsContainerXS>

                            {/*Second Container*/}

                            <Container
                                disableGutters={true}
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'flex',
                                        md: 'flex',
                                        lg: 'flex'
                                    },
                                    flexShrink: '1',
                                    flexGrow: '1',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '50%',
                                    maxHeight: '100%',
                                }}
                            >

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
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        height: '100%',
                                        width: '100%',
                                        mt: '24px',
                                        pb: '24px',
                                        overflowY: 'auto',
                                        overflowX: 'hidden',
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
                                                mt: '24px',
                                                flexShrink: '0',
                                                flexGrow: '0',
                                                fontSize: '1rem'
                                            }}>
                                            {notification} liked your post
                                        </Typography>
                                    )}
                                </Container>
                            </Container>
                        </UserDataContainer>

                    </UserData>

                    {/*3rd Grid Item*/}

                    <ForumsYouFollow
                        container
                        item
                        xs={12} sm={12} md={12} lg={12}
                    >
                        <Container
                            disableGutters={true}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <FYFNavBar
                                className='dashboard-forum-navbar'
                                id='dashboard-forum-navbar'
                            >
                                <Typography
                                    noWrap
                                    sx={{
                                        fontSize: {
                                            xs: '0.6rem',
                                            sm: '1rem',
                                            md: '1rem',
                                            lg: '1rem',
                                        }
                                    }}
                                >
                                    <strong>
                                        Forums you follow
                                    </strong>
                                </Typography>
                                <Link
                                    to='/forums'
                                    className='explore-button'
                                >
                                    Explore
                                </Link>
                            </FYFNavBar>
                            <Container
                                disableGutters={true}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    flexShrink: 0,
                                    gap: '16px',
                                    width: '100%',
                                    height: '100%',
                                    mt: {
                                        xs: '16px',
                                        sm: '32px',
                                        md: '32px',
                                        lg: '32px'
                                    },
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
                                                gap: {
                                                    xs: '8px',
                                                    sm: '8px',
                                                    md: '16px',
                                                    lg: '16px'
                                                },
                                                p: {
                                                    xs: '0 8px',
                                                    sm: '0 8px',
                                                    md: '0 16px',
                                                    lg: '0 16px'
                                                },
                                            }}
                                        >
                                            <Avatar
                                                key={key}
                                                alt='profile picture'
                                                variant='square'
                                                sx={{
                                                    height: {
                                                        xs: '16px',
                                                        sm: '64px',
                                                        md: '64px',
                                                        lg: '64px',
                                                    },
                                                    width: {
                                                        xs: '16px',
                                                        sm: '64px',
                                                        md: '64px',
                                                        lg: '64px',
                                                    }
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
                                                    height: {
                                                        xs: '140px',
                                                        sm: '168px',
                                                        md: '168px',
                                                        lg: '168px'
                                                    },
                                                    p: '8px',
                                                    backgroundColor: 'var(--theme-blue)'
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
                                                                xs: '0.68rem',
                                                                sm: '0.7rem',
                                                                md: '1rem',
                                                                lg: '1.2rem',
                                                                xl: 'false'
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
                                                                xs: '0.68rem',
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
                                                        p: '8px 8px !important',
                                                        border: 'solid 1px var(--theme-orange)',
                                                        overflowY: 'auto',
                                                        overflowX: {
                                                            xs: 'hidden',
                                                            sm: 'auto',
                                                            md: 'auto',
                                                            lg: 'auto'
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: '0.68rem',
                                                                sm: '0.7rem',
                                                                md: '0.9rem',
                                                                lg: '1rem'
                                                            },
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
                                                        to={postContent[key].forumLink}
                                                    >
                                                        <Typography
                                                            noWrap
                                                            align='center'
                                                            className='links-hover-state'
                                                            sx={{
                                                                fontSize: {
                                                                    xs: '0.68rem',
                                                                    sm: '0.7rem',
                                                                    md: '1rem',
                                                                    lg: '1.2rem',
                                                                    xl: ''
                                                                },
                                                                color: 'var(--theme-white)'
                                                            }}
                                                        >
                                                            Forum Name
                                                        </Typography>
                                                    </Link>
                                                    <div
                                                        className='post-controls'
                                                    >
                                                        <AddCommentOutlinedIcon
                                                            key={key}
                                                            sx={{
                                                                height: {
                                                                    xs: '16px',
                                                                    sm: '16px',
                                                                    md: '32px',
                                                                    lg: 'false'
                                                                },
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
                                                                    height: {
                                                                        xs: '16px',
                                                                        sm: '16px',
                                                                        md: '32px',
                                                                        lg: 'false'
                                                                    },
                                                                    color: 'red',
                                                                    '&:hover': {
                                                                        cursor: 'pointer',
                                                                    }
                                                                }}
                                                            />) : (<FavoriteBorderOutlinedIcon
                                                                onClick={() => toggleLike(key)}
                                                                sx={{
                                                                    height: {
                                                                        xs: '16px',
                                                                        sm: '16px',
                                                                        md: '32px',
                                                                        lg: 'false'
                                                                    },
                                                                    color: 'red',
                                                                    '&:hover': {
                                                                        cursor: 'pointer',
                                                                        color: '#f95149',
                                                                    }
                                                                }} />
                                                        )}
                                                    </div>
                                                </div>
                                            </Container>
                                        </Container>
                                    )}
                                <CommentsModal
                                    open={isModalOpen !== null}
                                    onClose={() => handleCloseModal()}
                                    username={postContent[isModalOpen]?.username}
                                    comment={postContent[isModalOpen]?.postText}
                                />
                            </Container>
                        </Container>
                    </ForumsYouFollow>
                    {isSidebarOpen && (
                        <SideBarNav />
                    )}
                    {isTeamsDisplayed && (
                        <Fragment>
                            <Container
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%',
                                    backgroundColor: 'var(--theme-blue)',
                                    zIndex: 100
                                }}
                            >
                                <IconButton
                                    onClick={handleTeamsDisplayed}
                                    sx={{
                                        position: 'absolute',
                                        display: 'flex',
                                        left: '8px',
                                        top: '8px',
                                    }}
                                >
                                    <ArrowBackIosNewOutlinedIcon
                                        sx={{
                                            color: 'var(--theme-orange)'
                                        }}
                                    />
                                </IconButton>
                                <Typography
                                    align='center'
                                    sx={{
                                        position: 'absolute',
                                        top: '8px',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    Favorite Teams
                                </Typography>
                                <Container
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        height: '88%',
                                        width: '100%',
                                        mt: '56px',
                                        pl: '16px !important',
                                        pr: '16px !important',
                                        overflowY: 'auto',
                                        border: 'solid 1px #F26101'
                                    }}>

                                    {fakeTeams.map((team) =>
                                        <Container
                                            key={team}
                                            sx={{
                                                display: 'flex',
                                                flexShrink: 1,
                                                flexGrow: 0,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                width: '33%',
                                                minWidth: '73px',
                                                mt: '24px',
                                                p: '0 0 !important'

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
                        </Fragment>
                    )}
                    {isNotificationsDisplayed && (
                        <Container
                            sx={{
                                position: 'absolute',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                backgroundColor: 'var(--theme-blue)',
                                zIndex: 100
                            }}
                        >
                            <IconButton
                                onClick={handleNotificaitions}
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    left: '8px',
                                    top: '8px',
                                }}
                            >
                                <ArrowBackIosNewOutlinedIcon
                                    sx={{
                                        color: 'var(--theme-orange)'
                                    }}
                                />
                            </IconButton>
                            <Typography
                                align='center'
                                sx={{
                                    position: 'absolute',
                                    top: '8px',
                                    fontSize: '1.5rem',
                                }}
                            >
                                Notifications
                            </Typography>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '88%',
                                    width: '100%',
                                    mt: '56px',
                                    pb: '24px',
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
                                            mt: '24px',
                                            flexShrink: '0',
                                            flexGrow: '0',
                                            fontSize: '1rem'
                                        }}>
                                        {notification} liked your post
                                    </Typography>
                                )}
                            </Container>
                        </Container>
                    )}
                </MainLayoutGrid>

                {/*Footer Component*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}