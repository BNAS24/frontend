import { Typography, FormGroup } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import customTheme from '../styles/context/customtheme';
import '../styles/login.css';

export const Login = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <div
                className='main-container'
            >
                <img
                    src="https://i.postimg.cc/wjkpvXx7/fans.png?"
                    alt="logo"
                    className="login-logo" />
                <Typography
                    align='center'
                    noWrap
                    sx={{
                        marginTop: '24px',
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3rem',
                            lg: '3.2rem',
                        }
                    }}
                >
                    Login to continue
                </Typography>
                <FormGroup
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        paddingTop: '16px'
                    }}
                >
                    <TextField
                        id="outlined-required"
                        label="Email"
                        type='email'
                        variant="outlined"
                        margin='dense'
                        sx={{
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
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        margin='dense'
                        sx={{
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
                        }}
                    />
                    <NavLink
                        to='/dashboard'
                        className='link-wrapper'
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            type='button'
                            sx={{
                                minWidth: '104px',
                                maxWidth: '400px',
                                padding: '8px 8px',
                                marginTop: '16px',
                                color: 'white',
                                backgroundColor: 'var(--theme-orange)',
                                fontSize: '16px',
                                '&:hover': {
                                    backgroundColor: '#fe6f10'
                                },
                            }}
                        >
                            Login
                        </Button>
                    </NavLink>
                </FormGroup>
                <p
                    className='create-account-text'>
                    <Link
                        to='/register'
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </ThemeProvider>
    );
};
