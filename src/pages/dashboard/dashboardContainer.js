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

    const [favoriteTeams, setFavoriteTeams] = useState([]);

    const [forumContent, setForumContent] = useState([]);

    // Initialize an object to store like button states for each post

    const [likeButton, setLikeButtons] = useState({});

    const [isModalOpen, setModalOpen] = useState(null);

    const [isTeamsDisplayed, setTeamsDisplayed] = useState(false);

    const [isNotificationsDisplayed, setNotificationsDisplayed] = useState(false);

    const [extraUserData, setExtraUserData] = useState(null);

    const [profileModalState, setProfileModalState] = useState(false);

    const [userProfileStats, setUserProfileStats] = useState(null);

    const [followState, setFollowState] = useState(false);

    // const [isNotificationsSnackBarOn, setNotificationsSnackBarOn] = useState(true);

    useEffect(() => {

        if (isLoading) {
            return;
        };

        if (!user) {

            if (!checkedUserStatus) {

                setCheckedUserStatus(true);

                return;
            }

            navigate('/login');
        };


    }, [user, isLoading, checkedUserStatus, navigate]);

    useEffect(() => {

        if (user) {

            const fetchFavoriteTeamsList = async () => {

                try {

                    const response = await fetch(`http://localhost:5000/api/users/favorites-teams/${user._id}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        },
                    });

                    if (response.status === 200) {

                        const favoriteTeamsList = await response.json();

                        if (favoriteTeamsList.length > 0) {

                            setFavoriteTeams(favoriteTeamsList);

                        }

                    } else if (response.status === 204) {

                        console.log('No favorited teams found in list.');

                        setFavoriteTeams([]);

                    } else {

                        console.error('Error fetching data:', response.statusText);

                    }

                } catch (error) {
                    console.error(error);
                }
            };

            fetchFavoriteTeamsList();
        }
    }, [user]);


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
        };

        if (!forumContent.length) {

            forumsYouFollow();

        };

    }, [forumContent.length]);

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
                    };

                    const userData = await response.json();

                    setExtraUserData(userData);

                } catch (error) {
                    console.error(error);
                };
            };

            getUserDetails();
        };

    }, [user, setExtraUserData]);

    // Function to toggle the like button state for a specific post

    const toggleLike = (postKey) => {

        setLikeButtons((prevLikeButtons) => ({

            ...prevLikeButtons,

            [postKey]: !prevLikeButtons[postKey],

        }));

        socket.emit('liked', { message: 'Your post was liked!' });

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

    const openProfileModal = () => {
        setProfileModalState(true);
    };

    const closeProfileModal = (e) => {
        if (e) {
            e.preventDefault();
        }
        setProfileModalState(false);
    };

    // const handleClosingSnackBar = () => {
    //     setNotificationsSnackBarOn(false);
    // };

    const fetchUserProfile = async (userClickedOn) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/userStats/${userClickedOn}`);

            if (!response.ok) {

                console.log(`Error fetching user profile for ${userClickedOn}:`, response.statusText);

            } else {

                const userStats = await response.json();
                setUserProfileStats(userStats);

            }

        } catch (error) {
            console.log(error);
        }
    };

    const followUser = async (username) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/follow/${username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
            });

            if (!response.ok) {

                console.log(`Error following user: ${username}`);

            } else {

                const result = await response.json();

                console.log(result);

                setFollowState(true);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const unfollowUser = async (username) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/unfollow/${username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
            });

            if (!response.ok) {

                console.log(`Error unfollowing user: ${username}`);

            } else {

                const result = await response.json();

                console.log(result);

                setFollowState(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    console.log('extra data', extraUserData);
    
    return (
            <DashboardPres
                user={user}
                favoriteTeams={favoriteTeams}
                extraUserData={extraUserData}
                likeButton={likeButton}
                toggleLike={toggleLike}


                isTeamsDisplayed={isTeamsDisplayed}
                handleTeamsDisplayed={handleTeamsDisplayed}
                isNotificationsDisplayed={isNotificationsDisplayed}
                handleNotifications={handleNotifications}
                forumContent={forumContent}

                fetchUserProfile={fetchUserProfile}
                userProfileStats={userProfileStats}

                // Comment Modal
                isModalOpen={isModalOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                followUser={followUser}
                unfollowUser={unfollowUser}

                // Profile Modal
                profileModalState={profileModalState}
                openProfileModal={openProfileModal}
                closeProfileModal={closeProfileModal}
                followState={followState}
                setFollowState={setFollowState}
            />
    );
};