import { FormGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authSlice';
import customTheme from '../styles/context/customtheme';
import '../styles/register.css';

export const Register = () => {

    const { register, user, isError, isSuccess, message } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            console.error(message)
        }

        if (isSuccess || user) {
            navigate('/dashboard')
        }
    }, [user, navigate, message, isError, isSuccess, register]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { username, email, password, confirmPassword } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            // Console.log error message
            console.error("Password and Confirm Password don't match");
        } else {
            const userData = {
                username,
                email,
                password,
            }
            register(userData)
        }
    }

    return (
        <ThemeProvider theme={customTheme}>
            <div
                className='main-container'
            >
                <Link
                    className='login-link'
                    to='/login'
                >
                    Login
                </Link>
                <img
                    src="https://i.postimg.cc/wjkpvXx7/fans.png"
                    alt="logo"
                    className="logo"
                />
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
                    Create an account
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
                        id="outlined-username-input"
                        label="Username"
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
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
                        id="outlined-email-input"
                        label="Email"
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
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
                        name='password'
                        value={password}
                        onChange={onChange}
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
                        id="outlined-confirm-password-input"
                        label="Confirm Password"
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onChange}
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
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={onSubmit}
                        sx={{
                            width: '80%',
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
                        Create
                    </Button>
                </FormGroup>
            </div>
        </ThemeProvider>

    );
}