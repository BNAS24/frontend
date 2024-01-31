import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import customTheme from '../../context/muiTheme/customtheme';
import '../../styleSheets/login.css'
import {
    LoginButton,
    LoginForm,
    LoginTitle,
    EmailTextField,
    PasswordTextField
} from './subcomponents/loginStyledComponents';


export const LoginPres = ({
    loginMessage,
    isError,
    onChange,
    onSubmit,
}) => {

    return (
        <>
            <ThemeProvider
                theme={customTheme}
                >
                <div
                    className='main-container'
                >
                    <img
                        src="https://i.postimg.cc/wjkpvXx7/fans.png?"
                        alt="logo"
                        className="login-logo"
                        loading='lazy'
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
                        <EmailTextField
                            id="login_email"
                            label="Email"
                            type='email'
                            name='email'
                            onChange={onChange}
                            autoComplete="current-email"
                            variant="outlined"
                            margin='dense'
                        />
                        <PasswordTextField
                            id="login_password"
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
        </>
    )
}