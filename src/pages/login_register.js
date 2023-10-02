import '../styles/login_register.css'
import Button from '@mui/material/Button'

export const LoginRegister = () => {
    return (
            <div className='main-container'>
                <img src="https://i.postimg.cc/wjkpvXx7/fans.png" alt="logo" className="login-logo" />
                <p className='login-title'>Login to continue</p>
                <form className='login-form'>
                    <label for='email'>Email</label>
                    <input type='email' className='sign-in'></input>
                    <label for='password'>Password</label>
                    <input type='password' className='sign-in'></input>
                    <Button variant="contained" className='login-button'>Login</Button>
                </form>
            </div>
    );
}