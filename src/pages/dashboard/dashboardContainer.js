import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { DashboardPres } from './dashboardPres';
import io from 'socket.io-client';

export const Dashboard = () => {

    const { user, isLoading } = useAuth();

    const navigate = useNavigate();

    const [socket, setSocket] = useState(null);

    const [checkedUserStatus, setCheckedUserStatus] = useState(false);

    useEffect(() => {

        if (isLoading) {
            return;
        }

        if (!user) {

            if (!checkedUserStatus) {
                setCheckedUserStatus(true);
                return;
            }

            navigate('/login');
        }

        const newSocket = io('http://localhost:5000');

        newSocket.on('connectionEstablished', (data) => {
            console.log('Socket connection established:', data);
            // You can perform additional actions upon connection
        });
        
        setSocket(newSocket);

        // Disconnect the socket when the component unmounts
        return () => {
            newSocket.disconnect();
        };

    }, [user, isLoading, checkedUserStatus, navigate]);

    // Initialize an object to store like button states for each post
    const [likeButton, setLikeButtons] = useState({});

    const [isModalOpen, setModalOpen] = useState(null);

    const [isTeamsDisplayed, setTeamsDisplayed] = useState(false);

    const [isNotificationsDisplayed, setNotificationsDisplayed] = useState(false);

    // Function to toggle the like button state for a specific post
    const toggleLike = (postKey) => {
        setLikeButtons((prevLikeButtons) => ({
            ...prevLikeButtons,
            [postKey]: !prevLikeButtons[postKey],
        }));
    };

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const handleTeamsDisplayed = () => {
        setTeamsDisplayed(!isTeamsDisplayed)
    };

    const handleNotifications = () => {
        setNotificationsDisplayed(!isNotificationsDisplayed)
    };

    return (
        <>
            <DashboardPres
                user={user}
                socket={socket}
                likeButton={likeButton}
                toggleLike={toggleLike}
                isModalOpen={isModalOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                isTeamsDisplayed={isTeamsDisplayed}
                handleTeamsDisplayed={handleTeamsDisplayed}
                isNotificationsDisplayed={isNotificationsDisplayed}
                handleNotifications={handleNotifications}
            />
        </>
    );
}