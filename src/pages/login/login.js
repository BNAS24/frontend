import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import customTheme from '../../styles/context/customtheme';
import '../../styles/login.css';
import { LoginButton, LoginForm, LoginTitle, TF1, TF2, } from '../login/components';


export const Login = () => {

    const { login, user, isError, isSuccess, messageTwo } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            console.error(messageTwo)
            setLoginMessage(messageTwo);
        }

        if (isSuccess || user) {
            navigate('/dashboard')
        }
    }, [user, navigate, messageTwo, isError, isSuccess, login]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [loginMessage, setLoginMessage] = useState('')

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }

        login(userData)
    }

    return (
        <ThemeProvider
            theme={customTheme}>
            <div
                className='main-container'
            >
                <img
                    src="https://i.postimg.cc/wjkpvXx7/fans.png?"
                    alt="logo"
                    className="login-logo"
                />
                <LoginTitle
                    align='center'
                    noWrap
                >
                    Login to continue
                </LoginTitle>
                <LoginForm
                    onSubmit={onSubmit}
                >
                    <TF1
                        id="login-email"
                        label="Email"
                        type='email'
                        name='email'
                        onChange={onChange}
                        variant="outlined"
                        margin='dense'
                    />
                    <TF2
                        id="login-password"
                        label="Password"
                        type="password"
                        name='password'
                        onChange={onChange}
                        autoComplete="current-password"
                        variant="outlined"
                        margin='dense'
                    />
                    <NavLink
                        onClick={onSubmit}
                        className='link-wrapper'
                    >
                        <LoginButton
                            fullWidth
                            variant="contained"
                            type='button'
                        >
                            Login
                        </LoginButton>
                    </NavLink>
                    {loginMessage && (
                        <Typography
                            align='center'
                            sx={{
                                color: isError ? 'red' : 'green',
                                mt: '16px',
                            }}
                        >
                            {loginMessage}
                        </Typography>
                    )}
                </LoginForm>
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
