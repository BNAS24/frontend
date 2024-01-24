import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { DashboardPres } from './dashboardPres';
import { useSocket } from '../../context/socketio/socketIoContext';

export const Dashboard = () => {

    const { user, isLoading } = useAuth();

    const socket = useSocket();

    const navigate = useNavigate();

    const [checkedUserStatus, setCheckedUserStatus] = useState(false);

    const [forumContent, setForumContent] = useState([]);

    const [extraUserData, setExtraUserData] = useState(null);

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


    }, [user, isLoading, checkedUserStatus, navigate]);


    useEffect(() => {

        const forumsYouFollow = async () => {
            try {

                const response = await fetch(`http://localhost:5000/api/forums/thread/allPosts/659c7073bac7087b77ed4471`);

                if (!response.ok) {

                    console.error('Error fetching data:', response.statusText);

                }

                const data = await response.json();

                setForumContent(data);

            } catch (error) {
                console.error(error);
            }
        }

        if (!forumContent.length) {

            forumsYouFollow();

        }

    }, [forumContent]);

    useEffect(() => {

        if (user?.token && user?._id) {

            const getUserDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/users/me/${user._id}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        },
                    });

                    if (!response.ok) {
                        console.error('Error fetching user details:', response.statusText);
                    }

                    const userData = await response.json();

                    setExtraUserData(userData);


                } catch (error) {
                    console.error(error);
                }
            }

            getUserDetails();
        };

    }, [user, setExtraUserData]);


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
        socket.emit('liked', { message: 'Your post was liked!' })
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
                extraUserData={extraUserData}
                likeButton={likeButton}
                toggleLike={toggleLike}
                isModalOpen={isModalOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                isTeamsDisplayed={isTeamsDisplayed}
                handleTeamsDisplayed={handleTeamsDisplayed}
                isNotificationsDisplayed={isNotificationsDisplayed}
                handleNotifications={handleNotifications}
                forumContent={forumContent}
            />
        </>
    );
};