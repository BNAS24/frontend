import { Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const SettingsModal = ({ open, onClose, onClick, settingSelected, title }) => {

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
                '&:hover': {
                    cursor: 'pointer',
                    color: '#f95149',
                }
            }}
            />
                {
                    settingSelected={settingSelected} ?
                    <Typography
                        variant="h5"
                        >
                        {title}
                    </Typography> : null
                }
            </Box>
        </Modal>
    )
}