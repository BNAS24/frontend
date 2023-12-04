import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import customTheme from '../../styles/context/customtheme';
import '../../styles/register.css';
import { RegButton, RegTF1, RegTF2, RegTF3, RegTF4, RegisterForm, RegisterTitle } from '../register/components';
;


export const Register = () => {

    const { register, user, isError, isSuccess, messageOne } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            console.error(messageOne)
            setRegMessage(messageOne);
        }

        if (isSuccess || user) {
            navigate('/dashboard')
        }
    }, [user, navigate, messageOne, isError, isSuccess, register]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [regMessage, setRegMessage] = useState('')

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
            setRegMessage("Passwords don't match");
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
                <RegisterTitle
                    align='center'
                    noWrap
                >
                    Create an account
                </RegisterTitle>
                <RegisterForm
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        pt: '16px'
                    }}
                >
                    <RegTF1
                        id="outlined-username-input"
                        label="Username"
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                        variant="outlined"
                        margin='dense'
                    />
                    <RegTF2
                        id="outlined-email-input"
                        label="Email"
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        variant="outlined"
                        margin='dense'
                    />
                    <RegTF3
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        value={password}
                        onChange={onChange}
                        variant="outlined"
                        margin='dense'
                    />
                    <RegTF4
                        id="outlined-confirm-password-input"
                        label="Confirm Password"
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onChange}
                        variant="outlined"
                        margin='dense'
                    />
                    <RegButton
                        fullWidth
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Create
                    </RegButton>
                    {regMessage && (
                        <Typography
                            align='center'
                            sx={{
                                color: isError ? 'red' : 'green',
                                mt: '16px',
                            }}
                        >
                            {regMessage}
                        </Typography>
                    )}
                </RegisterForm>
            </div>
        </ThemeProvider>

    );
}