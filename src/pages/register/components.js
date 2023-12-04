import { FormGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const RegisterTitle = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
        mt: '24px',
        fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '3.2rem',
        }
    })
)

export const RegisterForm = styled(FormGroup)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        pt: '16px'
    })
)

export const RegTF1 = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '80%',
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
    })
)

export const RegTF2 = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '80%',
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
    })
)

export const RegTF3 = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '80%',
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
    })
)

export const RegTF4 = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '80%',
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
    })
)

export const RegButton = styled(Button)(({ theme }) =>
    theme.unstable_sx({
        width: '80%',
        minWidth: '104px',
        maxWidth: '400px',
        p: '8px 8px',
        mt: '16px',
        color: 'white',
        backgroundColor: 'var(--theme-orange)',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: '#fe6f10'
        },
    })
)