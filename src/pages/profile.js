import { Avatar, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import { Footer } from '../components/authfoot';
import { NavBar } from "../components/authnav";
import { SettingsModal } from '../components/settingsmd';
import '../styles/profile.css';
import { useSidebar } from '../context/mobilenav';
import { SideBarNav } from '../components/helpers/sidebarnav';

const badges = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'];

const settings = {
    changeEmailAddress: {
        title: 'Change Email Address',
        oldEmailPrompt: 'Old Email',
        newEmailPrompt: 'New Email',
        confirmNewEmailPrompt: 'Confirm New Email',
        confirmEmailPrompt: 'Confirm Email',
    },
    changePassword: {
        title: 'Change Password',
        oldPasswordPrompt: 'Old Password',
        newPasswordPrompt: 'New Password',
        confirmPasswordPrompt: 'Confirm New Password',
        buttonText: 'Update Password'
    },
    updateProfilePicter: {
        title: 'Update Profile Picture',
        currentProfilePicFile: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        buttonText: 'Upload Image'
    },
    userStats: {
        title: 'User Stats',
        followers: {
            title: 'Followers',
            count: 2045
        },
        following: {
            title: 'Following',
            count: 235
        },
        numberOfPosts: {
            title: 'Number of Posts',
            count: 756
        }
    },
    logout: {
        title: 'Logout',
        logoutWarning: 'Are you sure you want to logout?',
        buttonText: 'Logout'
    }
}

export const Profile = () => {

    const { isSidebarOpen } = useSidebar();

    const [isModalOpen, setModalOpen] = useState(null);

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
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
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: '1fr 5fr',
                    gridGap: '8px',
                    columnGap: '56px',
                    maxHeight: '100vh',
                    padding: '24px 24px',
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }}
            >
                {/*First Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 1 / 2 / 2'
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
                            }}
                        />
                        <Typography
                            variant='h3'
                            style={{
                                marginLeft: '24px'
                            }}

                        >
                            Brandon
                            {/*The name will be dynamicall rendered*/}
                        </Typography>
                    </Container>
                </Grid>
                {/*Second Grid Item*/}
                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '2 / 1 / 3 / 2'
                    }}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexShrink: '0',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxHeight: '100%',
                            paddingLeft: '0 !important',
                            paddingRight: '0 !important'
                        }}>

                        <Typography
                            noWrap
                            align='center'
                            variant='h4'
                            sx={{
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
                                display: 'flex',
                                flexGrow: '1',
                                flexWrap: 'wrap',
                                height: '100%',
                                width: '100%',
                                marginTop: '24px',
                                paddingLeft: '16px !important',
                                paddingRight: '16px !important',
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
                                            marginTop: '24px',

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
                </Grid>
                {/*Third Grid Item*/}
                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 2 / 3 / 3',
                        minWidth: '289px',
                        border: 'solid 1px var(--theme-orange)',
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
                                marginTop: '24px',
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
                {isSidebarOpen  && (
                    <SideBarNav />
                )}
            </Grid>
            <Footer />
        </Box>
    )
}