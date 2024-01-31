import {
    Avatar,
    Box,
    Button,
    Container,
    Modal,
    // TextField,
    Typography
} from '@mui/material';
import { useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';

export const CommentsModal = ({
    user,
    open,
    onClose,
    username,
    comment,
    profileImage,
    followUser,
    unfollowUser,
    followState,
    setFollowState,
}) => {

    useEffect(() => {

        if (open) {

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

    }, [user, username, setFollowState, open]);

    const handleFollowButtonClick = async () => {
        try {

            if (followState) {

                await unfollowUser(username);

            } else {

                await followUser(username);

            }

            setFollowState(!followState);

        } catch (error) {
            console.error('Error in handleFollowButtonClick:', error);
        }
    };

    return (

        <Modal
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '50%',
                    minWidth: '300px',
                    height: '50vh',
                    padding: '16px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'var(--theme-blue)',
                    border: 'solid 2px var(--theme-orange)',
                    overflowY: 'hidden',
                }}
            >
                <CloseIcon
                    onClick={onClose}
                    sx={{
                        display: 'flex',
                        alignSelf: 'flex-end',
                        color: 'var(--theme-orange)',
                        zIndex: 2,
                        '&:hover': {
                            cursor: 'pointer',
                            color: '#f95149',
                        }
                    }}
                />
                <Container
                    disableGutters
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '32px',
                        height: '90%',
                        mt: '8px',
                        pl: '16px',
                    }}
                >
                    <Container
                        disableGutters
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            width: '16%',
                            minWidth: '16%',
                            pt: '16px',
                        }}
                    >
                        <Container
                            disableGutters
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'center',
                                justifyContent: 'stretch',
                                width: '100%',
                            }}
                        >
                            <Avatar
                                variant='square'
                                alt='profile picture'
                                src={profileImage
                                    ? `http://localhost:5000${profileImage}`
                                    : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                                }
                                sx={{
                                    cover: 'fill',
                                }}
                            />
                            <Typography
                                align='center'
                                variant="h6"
                                sx={{
                                    fontSize: {
                                        xs: '0.6rem',
                                        sm: '1rem',
                                        md: '1rem',
                                        lg: '1rem',
                                    }
                                }}
                            >
                                {username}
                            </Typography>
                            <Button
                                variant='text'
                                size='small'
                                onClick={handleFollowButtonClick}
                                sx={{
                                    // marginTop: '16px',
                                    color: 'var(--theme-orange)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(242, 97, 1, 0.2)',
                                    },
                                }}
                            >
                                {!followState ? 'Follow' : 'Unfollow'}
                            </Button>
                        </Container>
                    </Container>

                    {/*Focused Container*/}

                    <Container
                        sx={{
                            display: 'flex',
                            flexShrink: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            height: '100%',
                            width: '84%',
                            pb: '16px',
                            border: '1px solid var(--theme-orange)',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography
                            align='left'
                            variant="body2"
                            sx={{
                                marginTop: '16px',
                                backgroundColor: ' rgba(242, 97, 1, 0.2)',
                                borderRadius: '8px',
                                padding: '8px 8px 8px 8px',
                            }}
                        >
                            {comment}
                        </Typography>

                    </Container>
                </Container>
            </Box>
        </Modal>
    )
}