import { Container, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const ForumPageWrap = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
    })
)

export const ForumContent = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',
        display: 'flex',
        flex: '1',
        justifyContent: 'center'
    })
)

export const ForumSeachBar = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '100%',
        maxWidth: '400px',
        mt: '32px',
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
            color: 'white',
            '&.Mui-focused': {
                color: 'var(--theme-orange)',
            },
        },
        '& input:-webkit-autofill': {
            backgroundColor: 'transparent !important',
        },
    })
)

