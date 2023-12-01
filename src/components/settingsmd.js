import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, FormGroup, Input, Modal, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth/authSlice';
import customTheme from '../styles/context/customtheme';

export const SettingsModal = ({ open, onClose, onClick, settingSelected, settings }) => {

    const selectedSetting = settings[settingSelected];

    const { logout } = useAuth();

    const navigate = useNavigate();

    const onLogout = () => {
        logout()
        navigate('/login');
    }

    return (
        <ThemeProvider theme={customTheme}>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        border: 'solid 2px var(--theme-orange)',
                        width: '50%',
                        minWidth: '300px',
                        height: 'auto',
                        pb: '40px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'var(--theme-blue)',
                    }}
                >
                    <CloseIcon
                        onClick={onClick}
                        sx={{
                            display: 'flex',
                            alignSelf: 'flex-end',
                            marginTop: '8px',
                            marginRight: '8px',
                            color: 'var(--theme-orange)',
                            zIndex: 2,
                            '&:hover': {
                                cursor: 'pointer',
                                color: '#f95149'
                            }
                        }}
                    />
                    {selectedSetting && (
                        <Fragment>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    height: '100%',
                                    width: '100%',
                                    maxWidth: '100%'
                                }}
                            >
                                <Typography
                                    noWrap
                                    variant="h5"
                                    sx={{
                                        marginTop: '8px',
                                    }}
                                >
                                    {selectedSetting.title !== 'Logout' && selectedSetting.title}
                                </Typography>

                                {settingSelected === 'changeEmailAddress' && (
                                    <FormGroup
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '100%',
                                            height: '100%',
                                            pt: '16px'
                                        }}
                                    >
                                        <TextField
                                            id="old-email-input"
                                            label={selectedSetting.newEmailPrompt}
                                            variant="outlined"
                                            margin='dense'
                                            type='email'
                                            sx={{
                                                width: '100%',
                                                maxWidth: '400px',
                                                '& .MuiOutlinedInput-root': {
                                                    width: '100%',
                                                    maxWidth: '600px',
                                                    '& fieldset': {

                                                        borderColor: 'var(--theme-orange)'
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
                                        />
                                        <TextField
                                            id="new-email-input"
                                            label={selectedSetting.confirmNewEmailPrompt}
                                            variant="outlined"
                                            margin='dense'
                                            type='email'
                                            sx={{
                                                width: '100%',
                                                maxWidth: '400px',
                                                '& .MuiOutlinedInput-root': {
                                                    width: '100%',
                                                    maxWidth: '600px',
                                                    '& fieldset': {

                                                        borderColor: 'var(--theme-orange)'
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
                                        />

                                        <Button
                                            variant="contained"
                                            type='button'
                                            fullWidth
                                            sx={{
                                                minWidth: '104px',
                                                maxWidth: '400px',
                                                padding: '8px 8px',
                                                marginTop: '16px',
                                                color: 'white',
                                                backgroundColor: 'var(--theme-orange)',
                                                fontSize: '16px',
                                                '&:hover': {
                                                    backgroundColor: '#fe6f10',
                                                },
                                            }}

                                        >
                                            {selectedSetting.confirmEmailPrompt}
                                        </Button>
                                    </FormGroup>
                                )}
                                {settingSelected === 'changePassword' && (
                                    <>
                                        <FormGroup
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                height: '100%',
                                                pt: '16px'
                                            }}
                                        >
                                            <TextField
                                                id="old-password-input"
                                                label={selectedSetting.oldPasswordPrompt}
                                                variant="outlined"
                                                margin='dense'
                                                type='password'
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: '400px',
                                                    '& .MuiOutlinedInput-root': {
                                                        width: '100%',
                                                        maxWidth: '600px',
                                                        '& fieldset': {

                                                            borderColor: 'var(--theme-orange)'
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
                                            />
                                            <TextField
                                                id="new-password-input"
                                                label={selectedSetting.newPasswordPrompt}
                                                variant="outlined"
                                                margin='dense'
                                                type='password'
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: '400px',
                                                    '& .MuiOutlinedInput-root': {
                                                        width: '100%',
                                                        maxWidth: '600px',
                                                        '& fieldset': {

                                                            borderColor: 'var(--theme-orange)'
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
                                            />
                                            <TextField
                                                id="confirm-new-password-input"
                                                label={selectedSetting.confirmPasswordPrompt}
                                                variant="outlined"
                                                margin='dense'
                                                type='password'
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: '400px',
                                                    '& .MuiOutlinedInput-root': {
                                                        width: '100%',
                                                        maxWidth: '600px',
                                                        '& fieldset': {

                                                            borderColor: 'var(--theme-orange)'
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
                                            />

                                            <Button
                                                variant="contained"
                                                type='button'
                                                fullWidth
                                                sx={{
                                                    minWidth: '104px',
                                                    maxWidth: '400px',
                                                    padding: '8px 8px',
                                                    marginTop: '16px',
                                                    color: 'white',
                                                    backgroundColor: 'var(--theme-orange)',
                                                    fontSize: '16px',
                                                    '&:hover': {
                                                        backgroundColor: '#fe6f10',
                                                    },
                                                }}

                                            >
                                                {selectedSetting.buttonText}
                                            </Button>
                                        </FormGroup>
                                    </>
                                )}
                                {settingSelected === 'updateProfilePicter' && (
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-evenly',
                                            pt: '16px'
                                        }}
                                    >
                                        <Avatar
                                            variant='square'
                                            alt='profile picture'
                                            src={selectedSetting.currentProfilePicFile}
                                            sx={{
                                                height: '152px',
                                                width: '152px'
                                            }} />
                                        <label
                                            htmlFor="profilePicInput"
                                        >
                                            <Button
                                                variant="contained"
                                                type='button'
                                                component='span' // This makes the button act as a file input trigger
                                                sx={{
                                                    minWidth: '104px',
                                                    width: '152px',
                                                    maxWidth: '152px',
                                                    padding: '8px 8px',
                                                    marginTop: '16px',
                                                    color: 'white',
                                                    backgroundColor: 'var(--theme-orange)',
                                                    fontSize: '16px',
                                                    '&:hover': {
                                                        backgroundColor: '#fe6f10',
                                                    },
                                                }}

                                            >
                                                {selectedSetting.buttonText}
                                            </Button>
                                        </label>
                                        <Input
                                            type='file'
                                            id="profilePicInput"
                                            style={{ display: 'none' }}
                                        />
                                    </Container>
                                )}
                                {settingSelected === 'userStats' && (
                                    <Container
                                        disableGutters={true}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            minWidth: '100px',
                                            maxWidth: '400px !important',
                                            pt: '16px'
                                        }}
                                    >
                                        <Container
                                            disableGutters={true}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                width: 'auto',
                                                margin: '0',
                                                gap: '48px',
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
                                                {selectedSetting.followers.title}
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
                                                {selectedSetting.following.title}
                                            </Typography>
                                            <Typography
                                                noWrap
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
                                                {selectedSetting.numberOfPosts.title}
                                            </Typography>
                                        </Container>
                                        <Container
                                            disableGutters={true}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                width: 'auto',
                                                margin: '0',
                                                gap: '48px',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: 'var(--theme-orange)',
                                                    fontSize: {
                                                        xs: '',
                                                        sm: '20px',
                                                        md: '24px',
                                                        lg: '24px',
                                                        xl: '24px'
                                                    }
                                                }}
                                            >
                                                {selectedSetting.followers.count}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: 'var(--theme-orange)',
                                                    fontSize: {
                                                        xs: '',
                                                        sm: '20px',
                                                        md: '24px',
                                                        lg: '24px',
                                                        xl: '24px'
                                                    }
                                                }}
                                            >
                                                {selectedSetting.following.count}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: 'var(--theme-orange)',
                                                    fontSize: {
                                                        xs: '',
                                                        sm: '20px',
                                                        md: '24px',
                                                        lg: '24px',
                                                        xl: '24px'
                                                    }
                                                }}
                                            >
                                                {selectedSetting.numberOfPosts.count}
                                            </Typography>
                                        </Container>
                                    </Container>
                                )}
                                {settingSelected === 'logout' && (
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            gap: '32px'
                                        }}
                                    >
                                        <Typography
                                            variant='h5'
                                            color='red'
                                            align='center'
                                        >
                                            {selectedSetting.logoutWarning}
                                        </Typography>
                                        <Button
                                            onClick={onLogout}
                                            variant="outlined"
                                            type='button'
                                            sx={{
                                                color: 'var(--theme-white)',
                                                flexGrow: '0',
                                                maxWidth: '64px',
                                                '&:hover': {
                                                    color: 'red',
                                                },
                                            }}

                                        >
                                            {selectedSetting.buttonText}
                                        </Button>
                                    </Container>

                                )}

                            </Container>
                        </Fragment>
                    )}
                </Box>
            </Modal>
        </ThemeProvider >
    )
}