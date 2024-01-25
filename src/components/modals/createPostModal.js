import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../context/muiTheme/customtheme';
import {
    Box,
    Button,
    Container,
    FormGroup,
    Modal,
    TextField,
    Typography,
} from '@mui/material';

export const CreatePostModal = ({
    open,
    createPost,
    closePostModal,
    onPostChange,
}) => {

    const handleCreatePost = (e) => {

        createPost();

        closePostModal(e);

        window.location.reload();
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Modal
                open={open}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        minWidth: '300px',
                        // height: '50%',
                        p: 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'var(--theme-blue)',
                        border: 'solid 2px var(--theme-orange)',
                        overflow: 'hidden',
                        zIndex: 100,
                    }}
                >
                    <CloseIcon
                        onClick={(e) => closePostModal(e)}
                        sx={{
                            display: 'flex',
                            alignSelf: 'flex-end',
                            mt: '8px',
                            marginRight: '8px',
                            color: 'var(--theme-orange)',
                            zIndex: 2,
                            '&:hover': {
                                cursor: 'pointer',
                                color: '#f95149'
                            }
                        }}
                    />
                    <Container
                        disableGutters={true}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxHeight: '700px',
                            height: '100%',
                        }}
                    >
                        <Container
                            disableGutters={true}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                            align='center'
                            noWrap
                                sx={{
                                    paddingY: '4px',
                                    color: 'orange',
                                }}
                            >
                                Contribute your thoughts and ideas.
                            </Typography>
                            <FormGroup
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <TextField
                                    id="post-content"
                                    label='Type away'
                                    variant="outlined"
                                    margin='dense'
                                    type='text'
                                    multiline
                                    rows={5}
                                    onChange={onPostChange}
                                    inputProps={{ maxLength: 400 }}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '900px',
                                        '& .MuiOutlinedInput-root': {
                                            width: '100%',
                                            // maxWidth: '600px',
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
                            </FormGroup>

                            <Button
                                fullWidth
                                variant="contained"
                                type='submit'
                                sx={{
                                    mt: '8px',
                                    color: 'var(--theme-white)',
                                    backgroundColor: 'var(--theme-orange)',
                                }}
                                onClick={handleCreatePost}
                            >
                                Post
                            </Button>
                        </Container>
                    </Container>
                </Box>
            </Modal>
        </ThemeProvider>
    )
}