import { Modal, Box, Typography, Button } from '@mui/material';

export const CommentsModal = ({ open, onClose, username, comment }) => {


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
                <Typography
                    variant="h6"
                >
                    {username}
                </Typography>
                <Typography
                    variant="body2"
                >
                    {comment}
                </Typography>
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