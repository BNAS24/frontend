import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import '../styles/login.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#F26101',
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    width: '400px',
                    '& fieldset': {
                        borderColor: '#F26101',
                    },
                    '&:hover fieldset': {
                        borderColor: '#fe6f10',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fe6f10',
                    },
                },
                input: {
                    color: 'white',
                },
                notchedOutline: {
                    borderColor: '#F26101',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
    },
});

export const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <img src="https://i.postimg.cc/wjkpvXx7/fans.png" alt="logo" className="login-logo" />
                <p className='login-title'>Login to continue</p>
                <form className='login-form'>
                    <TextField
                        id="outlined-required"
                        label="Email"
                        color="secondary"
                        variant="outlined"
                        InputProps={{
                            style: { color: 'white' },
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
                            style: { color: 'white' },
                        }}
                    />
                    <Button disabled variant="contained" type='submit' className='login-button'>Login</Button>
                </form>
                <p className='create-account-text'><Link to='/register'>Create an account</Link></p>
            </div>
        </ThemeProvider>
    );
};
