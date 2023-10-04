import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import customTheme from '../styles/context/customtheme';
import '../styles/login.css';
import { Typography } from '@mui/material';

export const Login = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <div>
                <img src="https://i.postimg.cc/wjkpvXx7/fans.png" alt="logo" className="login-logo" />
                <Typography className='login-title'>Login to continue</Typography>
                <form className='login-form'>
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
                        sx={{ marginTop: '8px' }}
                    />
                    <NavLink to='/dashboard'>
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
                        Login
                    </Button>
                    </NavLink>
                </form>
                <p className='create-account-text'><Link to='/register'>Create an account</Link></p>
            </div>
        </ThemeProvider>
    );
};
