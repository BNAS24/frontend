import { Modal, Box, Typography, Button } from '@mui/material';

export const CommentsModal = ({ open, onClose }) => {


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
                    width: '50%',
                    minWidth: '300px',
                    height: '50%',
                }}
            >
                <Typography
                    variant="h6"
                >
                    Modal Title
                </Typography>
                <Typography
                    variant="body2"
                >
                    Modal content goes here.
                </Typography>
                <Button
                    variant='outlined'
                    onClick={onClose}
                    sx={{
                        color: 'var(--theme-orange)',

                        '&:hover': {
                            border: '1px solid var(--theme-orange)',
                            color: 'var(--theme-orange)',
                        },
                    }}
                >
                    Close
                </Button>

            </Box>
        </Modal>
    )
}