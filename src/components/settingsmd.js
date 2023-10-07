import { Modal, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from 'react';

export const SettingsModal = ({ open, onClose, onClick, settingSelected, title, settings }) => {
    const selectedSetting = settings[settingSelected];
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
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
                        <Typography variant="h5">{selectedSetting.title}</Typography>
                        {/* Display other data for the selected setting */}
                        {settingSelected === 'changeEmailAddress' && (
                            <>
                                <Typography>{selectedSetting.oldEmailPrompt}</Typography>
                                <Typography>{selectedSetting.newEmailPrompt}</Typography>
                                <Typography>{selectedSetting.confirmEmailPrompt}</Typography>
                            </>
                        )}
                        {settingSelected === 'changePassword' && (
                            <>
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
                    </Fragment>
                )}
            </Box>
        </Modal>
    )
}