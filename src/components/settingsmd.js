import { Modal, Box, Typography, FormGroup, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from 'react';
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import customTheme from '../styles/context/customtheme';

export const SettingsModal = ({ open, onClose, onClick, settingSelected, settings }) => {
    const selectedSetting = settings[settingSelected];
    return (
        <ThemeProvider theme={customTheme}>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'var(--theme-blue)',
                        border: 'solid 2px var(--theme-orange)',
                        p: 2,
                        width: '50%',
                        minWidth: '300px',
                        height: '50%',
                    }}
                >
                    <CloseIcon
                        onClick={onClick}
                        sx={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
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
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '100%',
                                    border: 'dashed 2px yellow',
                                }}
                            >
                                <Typography
                                    noWrap
                                    variant="h5"
                                >
                                    {selectedSetting.title}
                                </Typography>
                                {/* Display other data for the selected setting */}
                                {settingSelected === 'changeEmailAddress' && (
                                    <FormGroup
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: 'dashed 0.5px lime',
                                            width: '100%',
                                            height: 'auto',
                                            marginTop: '32px',
                                        }}
                                    >
                                        <TextField
                                            id="old-email-input"
                                            label={selectedSetting.newEmailPrompt}
                                            variant="outlined"
                                            margin='normal'
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
                                            margin='normal'
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
                                                border: 'dashed 0.5px lime',
                                                width: '100%',
                                                height: 'auto',
                                                marginTop: '32px',
                                            }}
                                        >
                                            <TextField
                                                id="old-email-input"
                                                label={selectedSetting.oldPasswordPrompt}
                                                variant="outlined"
                                                margin='normal'
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
                                                margin='normal'
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
                                                margin='normal'
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
                                        <Typography>{selectedSetting.oldPasswordPrompt}</Typography>
                                        <Typography>{selectedSetting.newPasswordPrompt}</Typography>
                                        <Typography>{selectedSetting.confirmPasswordPrompt}</Typography>
                                    </>
                                )}
                                {settingSelected === 'updateProfilePicter' && (
                                    <>
                                        <Typography>{selectedSetting.currentProfilePicFile}</Typography>
                                        <Typography>{selectedSetting.imgPrompt}</Typography>
                                    </>
                                )}
                                {/* Add conditions for other settings */}
                            </Container>
                        </Fragment>
                    )}
                </Box>
            </Modal>
        </ThemeProvider>
    )
}