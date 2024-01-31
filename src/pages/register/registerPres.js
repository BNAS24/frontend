import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import customTheme from '../../context/muiTheme/customtheme';
import '../../styleSheets/register.css';
import {
    RegisterButton,
    RegisterUsername,
    RegisterEmail,
    RegisterPassword,
    ConfirmPasswordRegistry,
    RegisterForm,
    RegisterTitle
} from './subcomponents/registerStyledComponents';

export const RegisterPres = ({
    username,
    email,
    password,
    confirmPassword,
    regMessage,
    isError,
    onChange,
    onSubmit,
}) => {


    return (
        <>
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
                        loading='lazy'
                    />
                    <RegisterTitle
                        align='center'
                        noWrap
                    >
                        Create an account
                    </RegisterTitle>
                    <RegisterForm>
                        <RegisterUsername
                            id="register_username"
                            label="Username"
                            type='text'
                            name='username'
                            value={username}
                            onChange={onChange}
                            variant="outlined"
                            margin='dense'
                        />
                        <RegisterEmail
                            id="register_email"
                            label="Email"
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            variant="outlined"
                            margin='dense'
                        />
                        <RegisterPassword
                            id="register_password"
                            label="Password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={onChange}
                            variant="outlined"
                            margin='dense'
                        />
                        <ConfirmPasswordRegistry
                            id="comfirm_password_registry"
                            label="Confirm Password"
                            type="password"
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={onChange}
                            variant="outlined"
                            margin='dense'
                        />
                        <RegisterButton
                            fullWidth
                            variant="contained"
                            onClick={onSubmit}
                        >
                            Create
                        </RegisterButton>
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
        </>
    )
}