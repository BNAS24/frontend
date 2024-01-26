import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import customTheme from '../../context/muiTheme/customtheme';
import {
    Box,
    Button,
    Container,
    Grid,
    Modal,
    Typography,
} from '@mui/material';

export const ProfileModal = ({
    user,
    open,
    closeProfileModal,
    userProfileStats,
    followUser,
    unfollowUser,
    followState,
    setFollowState,
}) => {

    useEffect(() => {
        
        if (userProfileStats && open) {

            const username = userProfileStats?.username;

            const fetchFollowerStatus = async () => {

                try {

                    const response = await fetch(`http://localhost:5000/api/users/checkFollowStatus/${username}`,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${user?.token}`
                            },
                        });

                    if (response.ok) {

                        const result = await response.json();

                        setFollowState(result.isFollowing);

                    }
                } catch (error) {
                    console.error('Error in useEffect:', error);
                }
            };

            fetchFollowerStatus();
        }

    }, [user, userProfileStats, setFollowState, open]);

    const handleFollowButtonClick = async () => {
        try {

            if (followState) {

                await unfollowUser(userProfileStats?.username);

            } else {

                await followUser(userProfileStats?.username);

            }

            setFollowState(!followState);

        } catch (error) {
            console.error('Error in handleFollowButtonClick:', error);
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Modal
                open={open}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '50%',
                        minWidth: '300px',
                        p: 2,
                        height: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'var(--theme-blue)',
                        border: 'solid 2px var(--theme-orange)',
                        overflow: 'hidden',
                    }}
                >
                    <CloseIcon
                        onClick={(e) => closeProfileModal(e)}
                        sx={{
                            display: 'flex',
                            alignSelf: 'flex-end',
                            mt: '8px',
                            marginRight: '8px',
                            color: 'var(--theme-orange)',
                            zIndex: 2,
                            '&:hover': {
                                cursor: 'pointer',
                                color: '#f95149'
                            },
                        }}
                    />
                    <Grid
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
                                md: '24px',
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
                            overflowY: 'hidden',
                        }}
                    >

                        {/*First Grid Items*/}

                        <Grid
                            item
                            container
                            xs={12} sm={12} md={12} lg={12}
                            sx={{
                                gridArea: {
                                    xs: '1 / 1 / 2 / 2',
                                    sm: '1 / 1 / 2 / 2',
                                    md: '1 / 1 / 2 / 2',
                                    lg: '1 / 1 / 2 / 2'
                                },
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                            align='center'
                                sx={{
                                    fontSize: {
                                        xs: '',
                                        sm: '20px',
                                        md: '24px',
                                        lg: '24px',
                                        xl: '24px'
                                    }
                                }}
                            >
                                {userProfileStats?.username}
                            </Typography>
                            <Button
                                type='submit'
                                sx={{
                                    color: 'var(--theme-orange)',
                                    '&:hover': {
                                        border: '1px solid var(--theme-orange)',
                                        color: 'var(--theme-orange)',
                                    },
                                }}

                                onClick={handleFollowButtonClick}
                            >
                                {!followState ? 'Follow' : 'Unfollow'}
                            </Button>
                        </Grid>

                        {/*Second Grid Item */}

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
                                border: '1px dashed var(--theme-orange)',
                            }}
                        >
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
                                border: '1px dashed var(--theme-orange)',
                            }}
                        >
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '24px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '',
                                            sm: '20px',
                                            md: '24px',
                                            lg: '24px',
                                            xl: '24px'
                                        }
                                    }}
                                >
                                    UserStats
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '',
                                            sm: '20px',
                                            md: '24px',
                                            lg: '24px',
                                            xl: '24px'
                                        }
                                    }}
                                >
                                    Followers {userProfileStats?.followersCount}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '',
                                            sm: '20px',
                                            md: '24px',
                                            lg: '24px',
                                            xl: '24px'
                                        }
                                    }}
                                >
                                    Following {userProfileStats?.followingCount}
                                </Typography>
                            </Container>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </ThemeProvider>

    )
};