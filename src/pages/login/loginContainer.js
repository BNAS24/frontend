import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import '../../styles/login.css';
import { LoginPres } from './loginPres';


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
        <>
            <LoginPres
                loginMessage={loginMessage}
                isError={isError}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </>
    );
};
