import { Link } from 'react-router-dom';
import '../styles/register.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import customTheme from '../styles/context/customtheme';
import { Typography } from '@mui/material';

export const Register = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <div>
                <Link
                    className='login-link'
                    to='/login'>Login
                </Link>
                <img
                    src="https://i.postimg.cc/wjkpvXx7/fans.png"
                    alt="logo"
                    className="logo" />
                <Typography
                    className='create-account-title'>
                    Create an account
                </Typography>
                <form
                    className='create-account-form'>
                    <TextField
                        id="outlined-required"
                        label="Email"
                        color="secondary"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& fieldset': {
                                    borderColor: '#F26101 !important',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#fe6f10 !important',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fe6f10 !important',
                                },
                            },
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        color="secondary"
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& fieldset': {
                                    borderColor: '#F26101 !important',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#fe6f10 !important',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fe6f10 !important',
                                },
                            },
                        }}
                        sx={{ marginTop: '4px' }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        color="secondary"
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& fieldset': {
                                    borderColor: '#F26101 !important',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#fe6f10 !important',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fe6f10 !important',
                                },
                            },
                        }}
                        sx={{ marginTop: '4px' }}
                    />
                    <Button
                        variant="contained"
                        type='button'
                        sx={{
                            color: 'white',
                            padding: '8px 8px',
                            fontSize: '16px',
                            '&:hover': {
                                backgroundColor: '#fe6f10',
                            },
                        }}
                        className='login-button'
                    >
                        Create
                    </Button>
                </form>
            </div>
        </ThemeProvider>

    );
}