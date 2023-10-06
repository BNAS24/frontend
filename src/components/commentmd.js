import { Modal, Box, Typography, Button } from '@mui/material';

export const CommentsModal = ({ open, onClose, onClick }) => {


    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'var(--theme-blue)',
                    border: 'solid 2px var(--theme-orange)',
                    p: 2,
                    minWidth: 300, // adjust to your modal's desired width
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white'
                    }}
                >
                    Modal Title
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'white'
                    }}
                >
                    Modal content goes here.
                </Typography>
                <Button
                    onClick={onClose}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    )
}