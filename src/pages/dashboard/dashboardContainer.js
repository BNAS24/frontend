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

        // Creates a socket.io session and adds events and listeners

        const newSocket = io('http://localhost:5000', {
            auth: (cb) => {
                cb({ token: localStorage.token })
            },
            withCredentials: true,
        });

        newSocket.on('connectionEstablished', (data) => {

            console.log('Dashboard socket connection established:', data);

        });

        newSocket.on('recieved', (data) => {

            alert(data.message);

        });

        newSocket.on('newFollower', (data) => {

            console.log(`${data.followerUsername} is now following you!`);

        });

        setSocket(newSocket);


        // Close the sockey connection
        return () => {
            newSocket.disconnect();
        };



    }, [user, isLoading, checkedUserStatus, navigate]);

    // Fetches the user data from the server
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
                console.error(error)
            }
        }

        if (!forumContent.length) {
            forumsYouFollow()
        }

    }, [forumContent])

    useEffect(() => {

        if (user?.token && user?._id) {
            console.log(`user ${user} user token: ${user.token}`)
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
                    console.log('userData', userData);

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
                forumContent={forumContent}
            />
        </>
    );
}