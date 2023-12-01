import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Fragment, useState } from 'react';
import { Footer } from '../components/authfoot';
import { NavBar } from "../components/authnav";
import { SideBarNav } from '../components/helpers/sidebarnav';
import { SettingsModal } from '../components/settingsmd';
import { useSidebar } from '../context/mobilenav';
import { badges, settings } from '../datastore/profile';
import '../styles/profile.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth/authSlice';



export const Profile = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const { isSidebarOpen } = useSidebar();

    const [isModalOpen, setModalOpen] = useState(null);

    const [isBadgesOpen, setBadgesOpen] = useState(false);

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const handleBadges = () => {
        setBadgesOpen(!isBadgesOpen)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
            }}>
            <NavBar />
            <Grid
                container
                sx={{
                    flex: '1',
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr 5fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)'
                    },
                    gridTemplateRows: {
                        xs: '1fr 8fr',
                        sm: '1fr 5fr',
                        md: '1fr 5fr',
                        lg: '1fr 5fr'
                    },
                    gridGap: '8px',
                    columnGap: {
                        xs: '8px',
                        sm: '24px',
                        md: '56px',
                        lg: '56px'
                    },
                    p: {
                        xs: '16px 8px !important',
                        sm: '24px 24px !important',
                        md: '24px 24px !important',
                        lg: '24px 24px !important'
                    },
                    maxHeight: '100vh',
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }}
            >
                {/*First Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: {
                            xs: '1 / 1 / 2 / 2',
                            sm: '1 / 1 / 2 / 2',
                            md: '1 / 1 / 2 / 2',
                            lg: '1 / 1 / 2 / 2'
                        },
                    }}>
                    <Container
                        disableGutters={true}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '100%',
                            alignItems: 'start',
                            color: 'white'
                        }}>
                        <Avatar
                            variant='square'
                            alt='profile picture'
                            src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            sx={{
                                height: {
                                    xs: 'auto',
                                    sm: '70px',
                                    md: '80px',
                                    lg: '104px'
                                },
                                width: {
                                    xs: '100%',
                                    sm: '70px',
                                    md: '80px',
                                    lg: '104px'
                                },
                                p: {
                                    xs: '0 0 !important',
                                    sm: 'false',
                                    md: 'false',
                                    lg: 'false',
                                }
                            }}
                        />
                        <Typography
                            variant='h3'
                            noWrap
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                    md: 'flex',
                                    lg: 'flex',

                                },
                                fontSize: {
                                    xs: 'false',
                                    sm: '2.5rem',
                                    md: 'false',
                                    lg: '3rem',
                                },
                                marginLeft: '24px'
                            }}
                        >
                            {user && user.username}
                        </Typography>
                    </Container>
                </Grid>

                {/*Displays only on xs sreens only*/}
                <Grid
                    item
                    maxWidth="xs"
                    sx={{
                        display: {
                            xs: 'flex',
                            sm: 'none',
                            md: 'none',
                            lg: 'none',
                        },
                        gridArea: '1 / 2 / 2 / 3',
                        color: 'white',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '2rem'
                        }}
                    >
                        {user && user.username}
                    </Typography>
                </Grid>

                {/*Second Grid Item*/}

                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: {
                            xs: '2 / 1 / 3 / 2',
                            sm: '2 / 1 / 3 / 2',
                            md: '2 / 1 / 3 / 2',
                            lg: '2 / 1 / 3 / 2'
                        },
                        overflow: {
                            xs: 'hidden',
                            sm: 'auto',
                            md: 'auto',
                            lg: 'auto'
                        },
                        minWidth: '40px',
                    }}>
                    <Container
                        disableGutters={true}
                        sx={{
                            display: 'flex',
                            flexShrink: '0',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxHeight: '100%',
                        }}>

                        <Typography
                            noWrap
                            align='center'
                            variant='h4'
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                    md: 'flex',
                                    lg: 'flex'
                                },
                                flexShrink: 0,
                                flexGrow: 1,
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '1.3rem',
                                    md: '1.7rem',
                                    lg: '2.5rem',
                                    xl: ''
                                }
                            }}>
                            Badges
                        </Typography>

                        <Container
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                    md: 'flex',
                                    lg: 'flex'
                                },
                                flexGrow: '1',
                                flexWrap: 'wrap',
                                height: '100%',
                                width: '100%',
                                mt: '24px',
                                pl: '16px !important',
                                pr: '16px !important',
                                overflowY: 'auto',
                                border: 'solid 1px #F26101'
                            }}>
                            {
                                badges.map((badge) =>
                                    <Container
                                        key={badge}
                                        sx={{
                                            display: 'flex',
                                            flexGrow: 1,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            width: '33%',
                                            mt: '24px',

                                        }}
                                    >
                                        <Avatar
                                            variant='square'
                                            alt={badge}
                                            src='https://i.postimg.cc/wB1wQD2r/award.png'
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
                                            {badge}
                                        </Typography>
                                    </Container>
                                )}
                        </Container>

                        {/*Displays on extra small screens only*/}

                        <Container
                            sx={{
                                display: {
                                    xs: 'flex',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'none',
                                },
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'start',
                                gap: '24px',
                                width: '100%',
                                height: '64px',
                                p: '0 16px',
                                border: 'solid 1px var(--theme-orange)'
                            }}
                        >
                            <img
                                className='side-controls'
                                onClick={handleBadges}
                                src='https://i.postimg.cc/g2VJs4YD/Badge-icon.png'
                                alt='badges'
                                style={{
                                    width: '40px',
                                    height: 'auto',
                                    mt: '8px',
                                }}
                            >
                            </img>
                        </Container>
                    </Container>
                </Grid>
                {/*Third Grid Item*/}
                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: {
                            xs: '2 / 2 / 3 / 3',
                            sm: '1 / 2 / 3 / 3',
                            md: '1 / 2 / 3 / 3',
                            lg: '1 / 2 / 3 / 3'
                        },
                        width: '100%',
                        minWidth: {
                            xs: '201px',
                            sm: '278px',
                            md: '278px',
                            lg: '278px'
                        },
                        overflow: 'auto',
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: 'solid 1px var(--theme-orange)',
                        }}
                    >
                        <Typography
                            noWrap
                            variant='h3'
                            align='center'
                            sx={{
                                mt: '24px',
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '2rem',
                                    md: '2.3rem',
                                    lg: '3rem',
                                    xl: ''
                                },
                                textDecoration: 'underline',
                                overflow: 'visible'
                            }}
                        >
                            Account Settings
                        </Typography>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {Object.keys(settings).map((key) =>
                                <Typography
                                    key={key}
                                    variant='h5'
                                    align='center'
                                    noWrap
                                    className='links-hover-state'
                                    onClick={() => handleOpenModal(key)}
                                >
                                    {settings[key].title}
                                </Typography>
                            )}
                            <SettingsModal
                                settingSelected={isModalOpen}
                                open={isModalOpen !== null}
                                onClose={() => handleCloseModal()}
                                onClick={handleCloseModal}
                                title={settings[isModalOpen]?.title}
                                settings={settings}
                            />
                        </Container>
                    </Container>
                </Grid>
                {isSidebarOpen && (
                    <SideBarNav />
                )}
                {isBadgesOpen && (
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
                                onClick={handleBadges}
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
                                Badges
                            </Typography>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    height: '88%',
                                    width: '100%',
                                    mt: '56px',
                                    pl: '16px !important',
                                    pr: '16px !important',
                                    overflowY: 'auto',
                                    border: 'solid 1px #F26101'
                                }}>
                                {
                                    badges.map((badge) =>
                                        <Container
                                            key={badge}
                                            sx={{
                                                display: 'flex',
                                                flexGrow: 1,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                width: '33%',
                                                mt: '24px',

                                            }}
                                        >
                                            <Avatar
                                                variant='square'
                                                alt={badge}
                                                src='https://i.postimg.cc/wB1wQD2r/award.png'
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
                                                {badge}
                                            </Typography>
                                        </Container>
                                    )}
                            </Container>
                        </Container>
                    </Fragment>
                )}
            </Grid>
            <Footer />
        </Box>
    )
}