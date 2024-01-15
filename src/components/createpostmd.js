import {
    Modal,
    Typography,
    Button,
    Box,
} from '@mui/material';

export const CreatePostModal = ({
    open,
    closePostModal
}) => {

    return (
            <Modal
                open={open}
                onClose
            >
                <Box>
                    <Typography>
                        Hello World
                    </Typography>
                    <Button
                        onClick={closePostModal}
                    >
                        Close Modal
                    </Button>
                </Box>
            </Modal>
    )
}