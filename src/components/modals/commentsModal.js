import {
    Avatar,
    Box,
    Button,
    Container,
    Modal,
    // TextField,
    Typography
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

export const CommentsModal = ({
    open,
    onClose,
    username,
    comment,
    profileImage
}) => {

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
                    // padding: '24px 24px 8px 16px',
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
                        // border: 'dashed 2px var(--theme-orange)',
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
                                // marginTop: '16px',
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
                                sx={{
                                    // marginTop: '16px',
                                    color: 'var(--theme-orange)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(242, 97, 1, 0.2)',
                                    },
                                }}
                            >
                                Follow
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
                            // might delete this maxHeight property below because it's faulty
                            // maxHeight: {
                            //     xs: '248px',
                            //     sm: '272px',
                            //     md: '313px', 
                            //     lg: '313px'
                            // },
                            height: '100%',
                            width: '84%',
                            // pl: '16px',
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
                        {/* 
                        <TextField
                            fullWidth={true}
                            sx={{
                                width: '100%',
                                // maxWidth: '400px',
                                '& .MuiOutlinedInput-root': {
                                    width: '100%',
                                    maxWidth: '600px',
                                    '& fieldset': {
                                        borderColor: 'var(--theme-orange)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fe6f10',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'var(--theme-orange)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    cursor: 'text',
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'var(--theme-orange)',
                                    },
                                },
                            }}
                        /> */}

                    </Container>
                </Container>
                {/* <Container
                    disableGutters
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        pt: '8px',
                    }}
                >
                    <Button
                        variant='outlined'
                        onClick={onClose}
                        sx={{
                            color: 'var(--theme-orange)',
                            flexGrow: '0',
                            maxWidth: '64px',
                            alignSelf: 'flex-end',
                            '&:hover': {
                                border: '1px solid var(--theme-orange)',
                            },
                        }}
                    >
                        Close
                    </Button>
                </Container> */}
            </Box>
        </Modal>
    )
}