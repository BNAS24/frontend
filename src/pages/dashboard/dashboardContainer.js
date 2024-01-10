import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { DashboardPres } from './dashboardPres';

export const Dashboard = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {

        if (!user) {
            navigate('/login');
        }

    }, [user, navigate]);

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
            // Toggle the state for the specified post
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