import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { RegisterPres } from './registerPres'
import '../../styleSheets/register.css';


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
        <>
            <RegisterPres 
            username={username} 
            email={email} 
            password={password} 
            confirmPassword={confirmPassword } // I think this might be an unnecessary prop to send.
            regMessage={regMessage}
            isError={isError}
            onChange={onChange}
            onSubmit={onSubmit}
            />
        </>
    )
}