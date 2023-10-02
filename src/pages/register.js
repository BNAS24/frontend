import { Link } from 'react-router-dom';
import '../styles/register.css'
import Button from '@mui/material/Button'

export const Register = () => {
    return (
            <>
            <Link className='login-link' to='/login'>Login</Link>
                <img src="https://i.postimg.cc/wjkpvXx7/fans.png" alt="logo" className="login-logo" />
                <p className='login-title'>Create an account</p>
                <form className='login-form'>
                    <label for='email'>Email</label>
                    <input type='email' className='sign-in'></input>
                    <label for='password'>Password</label>
                    <input type='password' className='sign-in'></input>
                    <label for='conf-password'>Confirm Password</label>
                    <input type='password' className='sign-in'></input>
                    <Button variant="contained" type='submit' className='login-button'>Create</Button>
                </form>
                </>
            
    );
}